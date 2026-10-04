import { chromium } from 'playwright'; import { writeFileSync } from 'node:fs'; import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname; const browser = await chromium.launch({ args: ['--mute-audio'] });
for (const [name, url] of [['en-us', '/en-us'], ['en-us_news', '/en-us/news'], ['en-us_operator', '/en-us/operator'], ['en-us_protocol_terms_of_service', '/en-us/protocol/terms_of_service']]) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }); const page = await ctx.newPage();
  await page.goto('https://endfield.gryphline.com' + url, { waitUntil: 'domcontentloaded', timeout: 120000 }); for (let i = 0; i < 60; i++) { await page.waitForTimeout(1000); if (!(await page.$('[class*="Loading_container"]'))) break; } await page.waitForTimeout(3000);
  writeFileSync(join(root, 'capture/pages', name, 'mobile-dom.html'), await page.content()); console.log('mobile dom', name); await ctx.close();
}
await browser.close();
