// Screenshot the first-load screen at fixed moments on the home and article pages.
import { chromium } from 'playwright';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname; const OUT = join(root, 'capture/states');
const browser = await chromium.launch({ args: ['--mute-audio'] });
for (const [name, url, vp] of [['loading-home', 'https://endfield.gryphline.com/en-us', { width: 1440, height: 900 }], ['loading-article', 'https://endfield.gryphline.com/en-us/news/7013', { width: 1440, height: 900 }], ['loading-mobile', 'https://endfield.gryphline.com/en-us', { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport: vp }); const page = await ctx.newPage();
  const t0 = Date.now(); await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
  for (const ms of [800, 2200, 4500]) { const wait = ms - (Date.now() - t0); if (wait > 0) await page.waitForTimeout(wait); const pct = await page.$eval('[class*="Loading_value"]', e => e.textContent).catch(() => null); await page.screenshot({ path: join(OUT, `${name}-${ms}ms.png`) }); console.log(name, ms, 'pct', pct); if (ms === 800) { const m = await page.$eval('[class*="Loading_container"]', e => e.outerHTML).catch(() => null); if (m) (await import('node:fs')).writeFileSync(join(OUT, `${name}-markup.html`), m); } }
  await ctx.close();
}
await browser.close();
