# Zenless Zone Zero website DNA — written specification

Distilled from the analysis tables; the single-page handbook (zh-cn/news/7013) and the printed edition (handbook/) carry the evidence and the specimens. Everything below is read from the shipped code or measured in headless Chromium on 2026-10-03/04.

## Delivery

- Nuxt 2 SPA (no server-rendered state), Vue 2.7.4 runtime, vue-router history mode, Vuex; webpack 4 chunks under /_nuxt/ (runtime b83911d, vendors 2e4935f + be1f69b, app 8c4c131, 47 route chunks).
- One HTML shell for every path; a static loader (.zzz-loading) inside it; SDK scripts (jquery 1.11.1, hoyoverse-account-sdk, hoyoverse-footer, analysis v2, APM helper) load before the app.
- CSS ships inside the chunks: 65 css-loader modules injected as <style> tags by vue-style-loader.
- Two route trees: desktop /:lang/… and phone /m/:lang/… (41 routes), chosen by user agent in the shell head.

## Scale

- html font-size = 100 × clientWidth ÷ designWidth; desktop designWidth 2560 with clientWidth clamped to [1440, 2560]; phone designWidth 750 (designHeight 1334 in landscape). Measured: 2560×1440 → 100px, 1920×1080 → 75px, 1440×900 → 56.25px, 1280×720 → 56.25px, 1024×768 → 56.25px, 800×600 → 56.25px; phone 390×844 → 52px, 375×667 → 50px, 430×932 → 57.3334px, 768×1024 → 102.4px.
- Desktop content column 19.2rem (1080 px at 1440); article column 12.8rem; header 1rem.

## Colour

| Colour | Uses | Properties |
| --- | ---: | --- |
| #fff | 77 | background-color, color, background |
| #000 | 61 | background-color, color, background |
| #222122 | 32 | color, background-color, background |
| #61636b | 22 | --global-color-grey-5, --brand-button-filled-disabled-element, --brand-button-ghost-disabled-element |
| rgba(0,0,0,0) | 18 | -webkit-tap-highlight-color, background, background-color |
| #323339 | 17 | --global-color-grey-3, --brand-button-filled-disabled-container, --brand-button-outlined-enabled-border |
| #d6d6d6 | 14 | color |
| #767678 | 14 | border, background-color |
| #d8fa00 | 14 | border-top, background-color, border |
| #2d2e33 | 10 | --global-color-grey-2, --brand-button-outlined-disabled-border, scrollbar-color |
| #ccd0d2 | 9 | --global-color-grey-8, --brand-button-outlined-enabled-element |
| #333 | 8 | background-color, color, border-top |
| rgba(0, 0, 0, 0) | 8 | background-image, background |
| #111 | 7 | background, background-color, color |
| #e8e8e8 | 7 | color, background-color, background-image |
| rgba(0, 0, 0, 0.5) | 6 | background-color, background-image, background |
| #000000 | 6 | --global-color-basic-black, --brand-button-filled-enabled-element, --brand-button-filled-hover-element |
| #c6e800 | 6 | --brand-color-hover, --brand-color-enabled, --brand-color-pressed |
| #efefef | 6 | background-color, color, background-image |
| #313131 | 6 | --brand-button-filled-enabled-element, --brand-button-filled-hover-element, --brand-button-filled-pressed-element |
| #d2d2d2 | 6 | --brand-button-filled-enabled-element, --brand-button-filled-hover-element, --brand-button-filled-pressed-element |
| #db9a45 | 6 | --brand-color-enabled, --brand-button-filled-enabled-element, --brand-button-filled-hover-element |
| #ffde00 | 5 | border, background, --brand-button-filled-pressed-container |
| hsla(0,0%,100%,0) | 5 | background |
| #d3bc8e | 5 | --brand-color-enabled, --brand-button-filled-enabled-element, --brand-button-filled-hover-element |
| #121212 | 4 | background-color, border, color |
| #787878 | 4 | color |
| #556ad0 | 4 | --brand-color-pressed, --brand-button-filled-pressed-container, --brand-color-enabled |
| #ff5e41 | 4 | --brand-color-error |
| #29d4ff | 4 | --brand-color-hover, --brand-button-filled-hover-container, --brand-color-pressed |

## Typography

- Faces: "Impact", "inpin hongmengti", "inpin hongmengti light", "en impact", "en inpin", "ko scd", "ja rog", "tw cloud", "icomoon", "KanitSemiBold", "KanitRegular", "KanitBold", "TTHovesProCompactBold", "Mont-Heavy".
- Sizes: .3rem (26), .24rem (24), .2rem (20), .28rem (19), .18rem (15), .22rem (12), 0 (11), .16rem (11), .32rem (11), 14px (9), 16px (8), .42rem (7), .26rem (7), .4rem (6).
- Line-heights: 1 (14), 0 (12), 1.3 (9), 1.5 (8), .3rem (8), .84 (8), .2rem (7), .24rem (5).

## Spacing

- margin: 0 auto (31)
- margin: 0 (21)
- padding: 0 (19)
- margin-left: 0 (15)
- padding: 0 .14rem (12)
- margin-left: .26rem (11)
- margin-top: .6rem (10)
- margin-top: 1rem (10)
- margin-top: .4rem (10)
- margin-top: .1rem (9)
- margin-right: .22rem (8)
- margin-left: .2rem (7)
- margin-right: 0 (7)
- margin-top: .7rem (7)
- padding: 0 .2rem (6)
- padding: 0 .1rem (6)
- margin-top: 1.1rem (6)
- margin-top: 0 (6)
- margin-bottom: .1rem (5)
- margin: .9rem 0 (5)
- padding: 0 .4rem (5)
- margin-right: .02rem (4)
- margin-top: .2rem (4)
- margin: 0 !important (4)

## Layers

- 2147483647 .user-model-loading__toast (fixed)
- 2147483646 .user-model-loading__bg (fixed)
- 999999 .nuxt-progress (fixed)
- 9999 .hyv-subscription-area-dropdown-wrapper (absolute)
- 999 .mhy-bridge-message-box-mask (fixed)
- 997 .loading[data-v-4ed1ddcf] (fixed)
- 996 .m-header (fixed)
- 200 .annotationLayer .popup (absolute)
- 100 .character .character-camp-selection (fixed)
- 100 .character-camp-selection (fixed)
- 99 .back-btn (fixed)
- 99 .header (fixed)
- 99 .footer[data-v-2b67f5b0] (relative)
- 99 .swiper-navigation[data-v-42ef7462] (absolute)
- 99 .m-home-character__main-nav .swiper-navigation[data-v-4cbeaaa9] (absolute)
- 99 .sidebar (fixed)
- 99 .home-character__main-nav .swiper-navigation[data-v-c6f7f9a8] (absolute)
- 90 .web-protocol .backContainer (sticky)
- 90 .gacha-detail .backContainer (sticky)
- 90 .news-detail .backContainer (sticky)
- 50 .swiper-container-horizontal > .swiper-scrollbar (absolute)
- 50 .swiper-container-vertical > .swiper-scrollbar (absolute)
- 50 .m-world__slide.swiper-slide ()
- 19 .m-home-character__main-nav[data-v-4cbeaaa9] (absolute)
- 19 .home-character__main-nav[data-v-c6f7f9a8] (absolute)
- 11 .character .side-character-camp-selection .side-camp-btm (absolute)
- 10 .swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-slide-shadow-bottom (absolute)
- 10 .swiper-button-prev,
.swiper-button-next (absolute)
- 10 .swiper-pagination (absolute)
- 10 .swiper-lazy-preloader (absolute)

## Motion

- Keyframes: van-slide-up-enter, van-slide-up-leave, van-slide-down-enter, van-slide-down-leave, van-slide-left-enter, van-slide-left-leave, van-slide-right-enter, van-slide-right-leave, van-fade-in, van-fade-out, van-rotate, van-circular, mihoyo-share-tips__mask-in, messageBoxScaleIn, messageBoxMaskIn, tada, wordsLoop, wordsLoopMob, loadingLoop-4ed1ddcf, heartbeat, swiper-preloader-spin, onAutoFillStart, onAutoFillCancel, t-spin, user-model-loading, slideToTop, slideLeft, slideRight, slideNextRight.
- 141 transition/animation declarations; 73 hover rules.

## Media queries

- @media screen and (orientation:landscape) (6 rules)
- @media (max-width: 1024px) (4 rules)
- @media (max-width: 374px) (1 rules)
- @media (max-width: 300px) (1 rules)

## Content API

- https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7/{getContentList,getContent,getChildTree}; channels: KV 285, camps 286, characters 287, news 288 (295 新闻 / 296 公告 / 297 活动), world 290, social 292, terms 293, privacy 294, video 1332 (1338–1341).
- Record: sChanId[], sTitle, sIntro, sUrl, sAuthor, sContent (HTML), sExt (JSON string of named images), dtStartTime, dtEndTime, dtCreateTime, iInfoId, sTagName[], sCategoryName, sSign; getContent adds around{prevContent,nextContent}.
