#!/usr/bin/env python3
"""Lays out handbook/doc/content.json (written by tools/build-doc.mjs) as the printed handbook, in the
geometry measured from the supplied template PDF and the structure of the reference book built on it:

  cover        title and subtitle centred in the heading sans; left column (edition, Authors) and right
               column (Sources, date) at the template's positions; Acknowledgements label with a small
               sans paragraph; no wordmark
  body pages   section title at 59 pt from the top on every page (" - continued" on run-on pages), a grey
               8 pt source line under the title on the section's first page, text column 108-556 pt,
               justified 11.3 pt Noto Serif on a 17.3 pt line, 15.3 pt sans sub-headings
  contents     ruled rows, page number right-aligned at 522 pt, linked
  footer       running title at 54 pt, "Contents" link, page number right-aligned at 557 pt, 8 pt grey
  colours      page #e2d9cc, text #101010, headings #000, sublines #686868, footer #929497, links #205c9d

Three builds: the first learns every section's page, the second adds the index (page texts via pdftotext)
and the contents numbers, the third confirms nothing moved. Also writes the Markdown twin.
"""
import json, os, re, subprocess, sys, html as htmlmod
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, PageBreak, Table, TableStyle,
                                Image, KeepTogether, Preformatted, XPreformatted, Flowable, NextPageTemplate, CondPageBreak)
from reportlab.platypus.flowables import HRFlowable
from PIL import Image as PILImage

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOC = os.path.join(ROOT, 'handbook', 'doc')
content = json.load(open(os.path.join(DOC, 'content.json'), encoding='utf-8'))
PDF = os.path.join(ROOT, 'handbook', 'Zenless-Zone-Zero-Site-DNA-Handbook.pdf')
MD = os.path.join(ROOT, 'handbook', 'Zenless-Zone-Zero-Site-DNA-Handbook.md')

# ---------- fonts
F = os.path.join(ROOT, 'tools', 'fonts')
pdfmetrics.registerFont(TTFont('Serif', os.path.join(F, 'noto-serif-latin-400-normal.ttf')))
pdfmetrics.registerFont(TTFont('Serif-Bold', os.path.join(F, 'noto-serif-latin-700-normal.ttf')))
pdfmetrics.registerFont(TTFont('Serif-Italic', os.path.join(F, 'noto-serif-latin-400-italic.ttf')))
pdfmetrics.registerFont(TTFont('Sans', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('Sans-Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFont(TTFont('Mono', '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))
pdfmetrics.registerFont(TTFont('CJK', '/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc', subfontIndex=0))  # Chinese text in the examples
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily('Serif', normal='Serif', bold='Serif-Bold', italic='Serif-Italic', boldItalic='Serif-Bold')
registerFontFamily('Sans', normal='Sans', bold='Sans-Bold', italic='Sans', boldItalic='Sans-Bold')

# ---------- geometry (pt) measured from the template / reference
PAGE_W, PAGE_H = letter
BG = colors.HexColor('#e2d9cc'); INK = colors.HexColor('#101010'); HEAD = colors.black
GREY = colors.HexColor('#686868'); FOOT = colors.HexColor('#929497'); LINK = '#205c9d'; RULE = colors.HexColor('#bfb8ab')
COL_L, COL_R = 108.0, 556.0; COL_W = COL_R - COL_L
TITLE_Y = PAGE_H - 59.0          # top of the section title box
SUB_Y = PAGE_H - 96.7            # top of the grey source line
FRAME_TOP = PAGE_H - 122.0       # first body line box top
FRAME_BOTTOM = 102.0             # body bottom (footer sits below)
FOOT_Y = PAGE_H - 708.7 - 8      # footer baseline
TOC_NUM_R = 522.0

# ---------- styles
def st(name, **kw):
    base = dict(fontName='Serif', fontSize=11.3, leading=17.3, textColor=INK, alignment=TA_LEFT, spaceAfter=9, splitLongWords=True)
    base.update(kw); return ParagraphStyle(name, **base)
S = {
    'body': st('body'),
    'bodyleft': st('bodyleft', alignment=TA_LEFT),
    'h3': st('h3', fontName='Sans', fontSize=15.3, leading=19, textColor=HEAD, alignment=TA_LEFT, spaceBefore=16, spaceAfter=8, keepWithNext=True),
    'h4': st('h4', fontName='Sans', fontSize=11.3, leading=14.5, textColor=HEAD, alignment=TA_LEFT, spaceBefore=10, spaceAfter=5, keepWithNext=True),
    'note': st('note', fontName='Sans', fontSize=8, leading=11, textColor=GREY, alignment=TA_LEFT, spaceAfter=6),
    'caption': st('caption', fontName='Sans', fontSize=8, leading=11, textColor=GREY, alignment=TA_LEFT, spaceBefore=3, spaceAfter=10),
    'code': ParagraphStyle('code', fontName='Mono', fontSize=7.4, leading=9.6, textColor=INK, leftIndent=0, spaceAfter=10, spaceBefore=2),
    'cell': st('cell', fontSize=8.6, leading=11, alignment=TA_LEFT, spaceAfter=0),
    'cellhead': st('cellhead', fontName='Sans', fontSize=7.8, leading=10, alignment=TA_LEFT, spaceAfter=0, textColor=HEAD),
    'toc': st('toc', fontName='Sans', fontSize=10, leading=13, alignment=TA_LEFT, spaceAfter=0, textColor=HEAD),
    'tocsub': st('tocsub', fontName='Sans', fontSize=9, leading=12, alignment=TA_LEFT, spaceAfter=0, textColor=HEAD, leftIndent=14),
    'tocpg': st('tocpg', fontName='Sans', fontSize=10, leading=13, alignment=TA_LEFT, spaceAfter=0, textColor=HEAD),
    'index': st('index', fontSize=8.6, leading=11.2, alignment=TA_LEFT, spaceAfter=0, leftIndent=10, firstLineIndent=-10),
    'indexletter': st('indexletter', fontName='Sans', fontSize=10, leading=13, alignment=TA_LEFT, spaceBefore=8, spaceAfter=3, textColor=HEAD, keepWithNext=True),
}

# ---------- inline markup: the block model's limited HTML → ReportLab paragraph XML
def para_xml(h):
    s = str(h)
    s = re.sub(r'<a href="([^"]*)">', lambda m: f'<link href="{htmlmod.escape(htmlmod.unescape(m.group(1)), quote=True)}" color="{LINK}"><u>', s).replace('</a>', '</u></link>')
    s = s.replace('<code>', '<font face="Mono" size="8.4">').replace('</code>', '</font>')
    # text segments must be XML-safe: escape & < > that are not part of our tags
    parts = re.split(r'(<[^>]+>)', s); out = []
    for p in parts:
        if p.startswith('<') and p.endswith('>') and re.match(r'</?(b|i|u|link|font|br)\b', p): out.append(p if not p.startswith('<br') else '<br/>')
        else: out.append(htmlmod.escape(htmlmod.unescape(p), quote=False))
    return cjk(''.join(out))
CJK_RE = re.compile(r'([\u2e80-\u9fff\uf900-\ufaff\uff00-\uffef\u3000-\u303f\u3040-\u30ff\uac00-\ud7af]+)')
def cjk(xml):
    """Give runs of CJK characters the CJK face (ReportLab paragraphs do not fall back between fonts); only text nodes, never tag attributes."""
    return ''.join(p if (p.startswith('<') and p.endswith('>')) else CJK_RE.sub(r'<font name="CJK">\1</font>', p) for p in re.split(r'(<[^>]+>)', xml))
def plain(h): return htmlmod.unescape(re.sub(r'<[^>]+>', '', str(h))).strip()

# ---------- flowables that record where sections land and draw the page furniture state
class SectionStart(Flowable):
    """Zero-height marker: sets the running title for this page onward, bookmarks the destination,
    records the page for the contents, and draws nothing (the page template draws the title zone)."""
    def __init__(self, key, title, subline, level=0, outline=True):
        Flowable.__init__(self); self.key, self.title, self.subline, self.level, self.outline = key, title, subline, level, outline
    def wrap(self, aw, ah): return (0, 0)
    def draw(self):
        doc = self.canv._doctemplate; pg = self.canv.getPageNumber()
        doc.section_title = self.title; doc.section_subline = self.subline; doc.section_first_page = pg
        self.canv.bookmarkPage(self.key)
        if self.outline: self.canv.addOutlineEntry(self.title, self.key, level=self.level, closed=self.level == 0)
        doc.pages_of[self.key] = pg
class Anchor(Flowable):
    def __init__(self, key): Flowable.__init__(self); self.key = key
    def wrap(self, aw, ah): return (0, 0)
    def draw(self): self.canv.bookmarkPage(self.key); self.canv._doctemplate.pages_of[self.key] = self.canv.getPageNumber()

class Doc(BaseDocTemplate):
    def __init__(self, path, **kw):
        BaseDocTemplate.__init__(self, path, pagesize=letter, leftMargin=COL_L, rightMargin=PAGE_W - COL_R, topMargin=PAGE_H - FRAME_TOP, bottomMargin=FRAME_BOTTOM, title=content['title'] + ' — ' + content['subtitle'], author=', '.join(content['cover']['authors']), **kw)
        self.section_title = ''; self.section_subline = ''; self.section_first_page = None; self.pages_of = {}
        body = Frame(COL_L, FRAME_BOTTOM, COL_W, FRAME_TOP - FRAME_BOTTOM, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0, id='body')
        cover = Frame(COL_L, FRAME_BOTTOM, COL_W, FRAME_TOP - FRAME_BOTTOM, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0, id='cover')
        self.addPageTemplates([PageTemplate(id='cover', frames=[cover], onPage=self.draw_cover), PageTemplate(id='body', frames=[body], onPage=self.page_begin, onPageEnd=self.page_end)])
    # every page: paper colour first
    def paper(self, canv): canv.saveState(); canv.setFillColor(BG); canv.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1); canv.restoreState()
    def page_begin(self, canv, doc): self.paper(canv)
    def page_end(self, canv, doc):
        pg = canv.getPageNumber(); canv.saveState()
        # section title zone (title on every page; " - continued" after the first page; subline on the first page only)
        if self.section_title:
            first = self.section_first_page == pg
            title = self.section_title + ('' if first else ' - continued')
            canv.setFillColor(HEAD); size = 24.0
            # a long title shrinks until it fits the column (never below 13 pt), then is cut with an ellipsis
            while pdfmetrics.stringWidth(title, 'Sans', size) > COL_W and size > 13.0: size -= 0.5
            while pdfmetrics.stringWidth(title, 'Sans', size) > COL_W and len(title) > 8: title = title[:-2].rstrip() + '…'
            while size > 14 and pdfmetrics.stringWidth(title, 'Sans', size) > COL_W: size -= 1
            canv.setFont('Sans', size); canv.drawString(COL_L, TITLE_Y - size * 0.80, title)
            if first and self.section_subline:
                canv.setFillColor(GREY); canv.setFont('Serif', 8); sub = self.section_subline
                while pdfmetrics.stringWidth(sub, 'Serif', 8) > COL_W and len(sub) > 10: sub = sub[:-4] + '…'
                canv.drawString(COL_L, SUB_Y - 8 * 0.8, sub)
        # footer: running title, Contents link, page number
        canv.setFillColor(FOOT); canv.setFont('Sans', 8)
        canv.drawString(54, FOOT_Y, f"{content['title']} - {content['subtitle']}")
        cw = pdfmetrics.stringWidth('Contents', 'Sans', 8); canv.drawString(468, FOOT_Y, 'Contents'); canv.linkRect('', 'contents', (468, FOOT_Y - 2, 468 + cw, FOOT_Y + 8), relative=0, thickness=0)
        canv.drawRightString(557, FOOT_Y, str(pg))
        canv.restoreState()
    # the cover, at the template's coordinates (pt from the top of the page)
    def draw_cover(self, canv, doc):
        self.paper(canv); c = content['cover']; canv.saveState()
        def ty(y): return PAGE_H - y
        canv.setFillColor(HEAD)
        canv.setFont('Sans', 30); canv.drawCentredString(PAGE_W / 2, ty(152.7 + 30 * 0.78), content['title'])
        canv.setFont('Sans', 18); canv.drawCentredString(PAGE_W / 2, ty(196.7 + 18 * 0.78), content['subtitle'])
        canv.setFont('Serif', 11.3); y = 277.0
        for line in c['leftTop']: canv.drawString(85.3, ty(y + 9), line); y += 16
        y = 339.0; canv.setFont('Serif-Bold', 11.3); canv.drawString(85.3, ty(y + 9), c['authorsLabel']); y += 16; canv.setFont('Serif', 11.3)
        for line in c['authors']: canv.drawString(85.3, ty(y + 9), line); y += 16
        y = 245.0; canv.setFont('Serif-Bold', 11.3); canv.drawString(391.0, ty(y + 9), c['sourcesLabel']); y += 16; canv.setFont('Serif', 11.3)
        for line in c['sources']:
            if line: canv.drawString(391.0, ty(y + 9), line)
            y += 16
        y += 16; canv.drawString(391.0, ty(y + 9), content['date'])
        canv.setFont('Serif', 11.3); canv.drawString(85.3, ty(640.0 + 9), c['ackLabel'])
        # small sans acknowledgement paragraph at 675 pt, 8 pt on a 12 pt line, 445 pt wide
        ack = Paragraph(para_xml(c['ack']), ParagraphStyle('cack', fontName='Sans', fontSize=8, leading=12, textColor=INK, alignment=TA_LEFT))
        w, h = ack.wrap(445, 100); ack.drawOn(canv, 86.0, ty(675.0) - h)
        canv.restoreState()

# ---------- block → flowables
CACHE = os.path.join(DOC, 'img-cache'); os.makedirs(CACHE, exist_ok=True)
from PIL import ImageFile as _PILImageFile; _PILImageFile.LOAD_TRUNCATED_IMAGES = True
def embed_path(abs_path, max_w=1200, max_h=2600):
    """Downsample for print: at most 1400 px across (3× the column width), JPEG for photographic captures,
    PNG kept for small specimens with flat colour; cached by path and size."""
    key = re.sub(r'[^A-Za-z0-9]+', '_', os.path.relpath(abs_path, ROOT)) + f'_{os.path.getsize(abs_path)}_{max_w}x{max_h}'
    with PILImage.open(abs_path) as im:
        w, h = im.size
        if w <= max_w and h <= max_h and os.path.getsize(abs_path) < 400_000: return abs_path, w, h
        out = os.path.join(CACHE, key + '.jpg')
        if not os.path.exists(out):
            try:
                scale = min(1.0, max_w / w, max_h / h); im2 = im.convert('RGB').resize((max(1, int(w * scale)), max(1, int(h * scale))), PILImage.LANCZOS)
                im2.save(out, 'JPEG', quality=82, optimize=True)
            except OSError as e:
                print('image downsample failed, using the original:', abs_path, e); return abs_path, w, h
        with PILImage.open(out) as im2: w2, h2 = im2.size
        return out, w2, h2
def img_flow(path, caption, max_h=470):
    abs_path = path if os.path.isabs(path) else os.path.join(ROOT, path)
    if not os.path.exists(abs_path): return [Paragraph(para_xml(f'<i>[image missing: {path}]</i>'), S['note'])]
    abs_path, w, h = embed_path(abs_path)
    scale = min(COL_W / w, max_h / h)
    fl = [Image(abs_path, width=w * scale, height=h * scale, hAlign='LEFT')]
    if caption: fl.append(Paragraph(para_xml(caption), S['caption']))
    else: fl.append(Spacer(1, 8))
    return [KeepTogether(fl)] if h * scale < 400 else fl
def wrap_code(text, width=96):
    out = []
    for line in text.replace('\t', '  ').split('\n'):
        line = line.rstrip()
        while len(line) > width: out.append(line[:width]); line = '  ' + line[width:]
        out.append(line)
    return '\n'.join(out)
def code_flow(text, numbered=False, chunk=120):
    lines = wrap_code(text).split('\n')
    if numbered:
        w = len(str(len(lines))); lines = [f'{str(i + 1).rjust(w)}  {l}' for i, l in enumerate(lines)]
    fl = []
    for i in range(0, len(lines), chunk):
        fl.append(XPreformatted(cjk(htmlmod.escape('\n'.join(lines[i:i + chunk]))), S['code']))
    return fl
def table_flow(rows, header=True):
    if not rows: return []
    n = max(len(r) for r in rows); rows = [r + [''] * (n - len(r)) for r in rows]
    # column widths proportional to the longest cell text, bounded
    lens = [max(min(len(plain(r[i])), 60) for r in rows) for i in range(n)]; lens = [max(l, 4) for l in lens]
    tot = sum(lens); widths = [COL_W * l / tot for l in lens]
    # a column is never narrower than its header word (no wrapped headers) nor than 34 pt
    mins = [max(34.0, pdfmetrics.stringWidth(plain(rows[0][i]), 'Sans', 7.8) + 10 if header else 34.0) for i in range(n)]
    widths = [max(w, m) for w, m in zip(widths, mins)]
    if sum(widths) > COL_W:
        free = [i for i in range(n) if widths[i] > mins[i]]; excess = sum(widths) - COL_W
        pool = sum(widths[i] - mins[i] for i in free)
        if free and pool >= excess:
            for i in free: widths[i] -= excess * (widths[i] - mins[i]) / pool
        else:
            widths = [max(w, m) for w, m in zip(widths, mins)]  # headers may wrap only when the column cannot hold them
    k = COL_W / sum(widths); widths = [max(20.0, w * k) for w in widths]; k = COL_W / sum(widths); widths = [w * k for w in widths]
    data = []
    for ri, r in enumerate(rows):
        data.append([Paragraph(para_xml(c), S['cellhead'] if (header and ri == 0) else S['cell']) for c in r])
    tbl = Table(data, colWidths=widths, repeatRows=1 if header else 0, hAlign='LEFT', splitByRow=1)
    style = [('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 4), ('RIGHTPADDING', (0, 0), (-1, -1), 4), ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3), ('LINEBELOW', (0, 0), (-1, -1), 0.4, RULE)]
    if header: style += [('LINEBELOW', (0, 0), (-1, 0), 0.8, HEAD)]
    tbl.setStyle(TableStyle(style)); return [tbl, Spacer(1, 10)]
def blocks_flow(blocks):
    fl = []
    for b in blocks:
        t = b['t']
        if t == 'h': fl.append(Paragraph(para_xml(b['text']), S['h3']))
        elif t == 'h4': fl.append(Paragraph(para_xml(b['text']), S['h4']))
        elif t == 'p': fl.append(Paragraph(para_xml(b['html']), S['body']))
        elif t == 'tag': fl.append(Paragraph(f"<b>{htmlmod.escape(b['label'])}</b> — " + para_xml(b['text']), S['body']))
        elif t == 'note': fl.append(Paragraph(para_xml(b['html']), S['note']))
        elif t == 'pre': fl += code_flow(b['text'])
        elif t == 'table': fl += table_flow(b['rows'], b.get('header', True))
        elif t == 'img': fl += img_flow(b['path'], b.get('caption', ''))
        elif t == 'specimen':
            fl.append(Paragraph(para_xml('<b>Specimen</b> — ' + b['label']), S['bodyleft']))
            if b.get('png'): fl += img_flow(b['png'], b.get('note') or 'Rendered by the site\'s own stylesheets at the 1440×900 scale.', max_h=380)
            elif b.get('note'): fl.append(Paragraph(para_xml(b['note']), S['note']))
            fl.append(Paragraph('Markup (verbatim from the live page; animation inline styles removed):', S['note']))
            fl += code_flow(b['markup'][:20000])
    return fl

# ---------- the story
def section(key, title, subline, blocks, level=0, outline=True, extra=None):
    fl = [NextPageTemplate('body'), PageBreak(), SectionStart(key, title, subline, level, outline)]
    fl += blocks_flow(blocks) if blocks is not None else []
    if extra: fl += extra
    return fl

def build(pages_of=None, index_entries=None):
    toc_rows = []  # (key, label, level)
    story = [Spacer(1, 1)]  # cover page content is drawn by the template
    story += section('front-preface', 'Preface', 'What this handbook describes, what it leaves out, and where its material comes from', content['front']['preface'], outline=True); toc_rows.append(('front-preface', 'Preface', 0))
    story += section('front-reading', 'Reading this edition', 'Evidence labels · specimens · code · where the files are', content['front']['reading']); toc_rows.append(('front-reading', 'Reading this edition', 0))
    # contents (filled from pages_of when known)
    story += [NextPageTemplate('body'), PageBreak(), SectionStart('contents', 'Contents', '', 0, True)]; toc_rows.append(('contents', 'Contents', 0))
    toc_placeholder_index = len(story); story.append(Spacer(1, 1))
    story += section('front-notice', 'Notice', 'Ownership of the material reproduced · what the reconstruction is and is not · how the template is used', content['front']['notice']); toc_rows.append(('front-notice', 'Notice', 0))
    for ch in content['chapters']:
        story += section(ch['key'], ch['title'], ch['subline'], ch['blocks']); toc_rows.append((ch['key'], ch['title'], 0))
    v = content['visual']; story += section(v['key'], v['title'], v['subline'], v['blocks']); toc_rows.append((v['key'], v['title'], 0))
    # index
    story += [NextPageTemplate('body'), PageBreak(), SectionStart('book-index', 'Index', 'Components, module files, fonts, colour tokens and terms · page numbers refer to the chapters', 0, True)]; toc_rows.append(('book-index', 'Index', 0))
    story.append(Paragraph('Identifiers are matched exactly; terms are matched regardless of case. The code appendices are not indexed; use the contents for them.', S['body']))
    if index_entries:
        cur = ''; cells = []
        for term, pages in index_entries:
            letter_ = '#' if re.match(r'[#0-9]', term) else term[0].upper()
            if letter_ != cur: cur = letter_; cells.append(Paragraph(letter_, S['indexletter']))
            pg = ', '.join(str(p) for p in pages[:12]) + (f' … ({len(pages)} pages)' if len(pages) > 14 else (', ' + ', '.join(str(p) for p in pages[12:]) if len(pages) > 12 else ''))
            cells.append(Paragraph(f'{htmlmod.escape(term)} <font color="#686868">{pg}</font>', S['index']))
        half = (len(cells) + 1) // 2; left, right = cells[:half], cells[half:]
        rows = [[left[i], right[i] if i < len(right) else ''] for i in range(half)]
        story.append(Table(rows, colWidths=[COL_W / 2 - 8, COL_W / 2 - 8], hAlign='LEFT', splitByRow=1, style=TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 16), ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0)])))
    else:
        story.append(Spacer(1, 1))
    for ap in content['appendices']:
        title = f"Appendix {ap['letter']}: {ap['title']}"
        story += section(ap['key'], title, ap['subline'], ap['intro']); toc_rows.append((ap['key'], title, 0))
        for f in ap['files']:
            story += [PageBreak(), SectionStart(f['key'], f['heading'], f['meta'], 1, True)]; toc_rows.append((f['key'], f['heading'], 1))
            if f.get('summary'): story.append(Paragraph(para_xml(f['summary']), S['body']))
            story += code_flow(f['code'], numbered=True)
    story += section('front-ack', 'Acknowledgements', '', content['front']['ack']); toc_rows.append(('front-ack', 'Acknowledgements', 0))
    # contents rows: label | page, ruled like the reference
    rows = []
    for key, label, level in toc_rows:
        if key == 'contents': continue
        pg = str(pages_of.get(key, '')) if pages_of else ''
        rows.append([Paragraph(f'<link href="#{key}">{htmlmod.escape(label)}</link>', S['tocsub'] if level else S['toc']), Paragraph(f'<link href="#{key}">{pg}</link>', S['tocpg'])])
    toc = Table(rows, colWidths=[TOC_NUM_R - COL_L - 30, 30], hAlign='LEFT', splitByRow=1)
    toc.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('ALIGN', (1, 0), (1, -1), 'RIGHT'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0), ('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 5), ('LINEBELOW', (0, 0), (-1, -1), 0.4, RULE)]))
    for i in range(len(rows)): toc.setStyle(TableStyle([('ALIGN', (1, i), (1, i), 'RIGHT')]))
    # right-align the number cells by using a right-aligned paragraph style
    for r in rows: r[1].style = ParagraphStyle('tocpgR', parent=S['tocpg'], alignment=2)
    story[toc_placeholder_index] = toc
    doc = Doc(PDF + '.tmp.pdf'); doc.build(story)
    return doc.pages_of

print('build 1: learning section pages'); pages1 = build()
# page texts for the index (from the first build), restricted to the chapters
texts = subprocess.run(['pdftotext', PDF + '.tmp.pdf', '-'], capture_output=True, text=True, check=True).stdout.split('\f')
first_chapter = pages1.get(content['chapters'][0]['key'], 1); last_chapter = pages1.get('book-index', len(texts)) - 1
def find(term, exact):
    pat = re.compile((r'(^|[^A-Za-z0-9_])' + re.escape(term) + r'(?![A-Za-z0-9_])') if exact else (r'(^|[^A-Za-z0-9])' + re.escape(term) + r'(?![A-Za-z0-9])'), 0 if exact else re.I)
    return [i + 1 for i, tx in enumerate(texts) if first_chapter <= i + 1 <= last_chapter and pat.search(tx)]
entries = []
for term in content['index']['identifiers']:
    pg = find(term, True)
    if pg: entries.append((term, pg))
for term in content['index']['terms']:
    pg = find(term, False)
    if pg: entries.append((term, pg))
entries.sort(key=lambda e: e[0].lower())
print(f'build 2: contents numbers + index ({len(entries)} entries, chapters on pages {first_chapter}-{last_chapter})'); pages2 = build(pages1, entries)
moved = [k for k in pages1 if pages1[k] != pages2.get(k)]
if moved:
    print(f'build 3: {len(moved)} sections moved after the index was added (e.g. {moved[:3]}); rebuilding with the new numbers'); pages3 = build(pages2, entries)
    still = [k for k in pages2 if pages2[k] != pages3.get(k)]
    if still: print('warning: pagination still differs for', still[:5])
os.replace(PDF + '.tmp.pdf', PDF)
info = subprocess.run(['pdfinfo', PDF], capture_output=True, text=True).stdout
print('PDF:', PDF, f'{os.path.getsize(PDF) / 1048576:.1f} MB', re.search(r'Pages:\s+(\d+)', info).group(1), 'pages')

# ---------- Markdown twin
def md_inline(h):
    s = str(h); s = re.sub(r'<a href="([^"]*)">(.*?)</a>', lambda m: f'[{plain(m.group(2))}]({htmlmod.unescape(m.group(1))})', s, flags=re.S)
    s = re.sub(r'</?b>', '**', s); s = re.sub(r'</?i>', '_', s); s = s.replace('<code>', '`').replace('</code>', '`'); s = s.replace('<br/>', '  \n')
    return htmlmod.unescape(re.sub(r'<[^>]+>', '', s)).strip()
def md_cell(h): return md_inline(h).replace('|', '\\|').replace('\n', ' ')
def md_blocks(blocks):
    out = []
    for b in blocks:
        t = b['t']
        if t == 'h': out.append(f"### {md_inline(b['text'])}\n")
        elif t == 'h4': out.append(f"#### {md_inline(b['text'])}\n")
        elif t == 'p': out.append(md_inline(b['html']) + '\n')
        elif t == 'tag': out.append(f"**{b['label']}** — {md_inline(b['text'])}\n")
        elif t == 'note': out.append(f"_{md_inline(b['html'])}_\n")
        elif t == 'pre': out.append('```\n' + b['text'] + '\n```\n')
        elif t == 'table':
            rows = b['rows']; n = max(len(r) for r in rows); rows = [r + [''] * (n - len(r)) for r in rows]
            out.append('| ' + ' | '.join(md_cell(c) for c in rows[0]) + ' |\n|' + ' --- |' * n + '\n' + '\n'.join('| ' + ' | '.join(md_cell(c) for c in r) + ' |' for r in rows[1:]) + '\n')
        elif t == 'img': out.append(f"![{md_inline(b.get('caption', ''))}]({content['siteUrl']}/{b['path']})\n")
        elif t == 'specimen': out.append(f"**Specimen — {md_inline(b['label'])}**\n\n" + (md_inline(b['note']) + '\n\n' if b.get('note') else '') + '```html\n' + b['markup'] + '\n```\n')
    return '\n'.join(out)
md = [f"# {content['title']} — {content['subtitle']}\n", f"Published {content['date']} · Author: {', '.join(content['cover']['authors'])} · Live edition: {content['siteUrl']}/en-us/news/7013/ · Repository: {content['repo']}\n"]
md.append('## Preface\n'); md.append(md_blocks(content['front']['preface']))
md.append('## Reading this edition\n'); md.append(md_blocks(content['front']['reading']))
md.append('## Contents\n'); md.append('\n'.join(f"- [{ch['title']}](#{ch['key']})" for ch in content['chapters']) + '\n')
md.append('## Notice\n'); md.append(md_blocks(content['front']['notice']))
for ch in content['chapters']: md.append(f"## {ch['number']:02d} {ch['title']}\n\n_{ch['subline']}_\n"); md.append(md_blocks(ch['blocks']))
md.append(f"## {content['visual']['title']}\n"); md.append(md_blocks(content['visual']['blocks']))
for ap in content['appendices']:
    md.append(f"## Appendix {ap['letter']}: {ap['title']}\n"); md.append(md_blocks(ap['intro']))
    for f in ap['files']: md.append(f"### {f['heading']}\n\n_{f['meta']}_\n" + (f"\n{f['summary']}\n" if f.get('summary') else '') + '\n```' + ('css' if f['key'].startswith('css-') else 'js') + '\n' + f['code'] + '\n```\n')
md.append('## Acknowledgements\n'); md.append(md_blocks(content['front']['ack']))
open(MD, 'w', encoding='utf-8').write('\n'.join(md))
print('MD:', MD, f'{os.path.getsize(MD) / 1048576:.2f} MB')
