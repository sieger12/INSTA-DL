# Claude.md — Site Generation Guide

## Core Rule

This project builds **websites that rank high on Google for ad revenue**.
The same AI makes multiple sites, so **every site must look and feel completely different**.
Google punishes sites that share similar UI, article structure, or content patterns.

---

## 1. Tech Stack

- **Next.js** with **Pages Router** (not App Router).
- **Tailwind CSS** for styling.
- **next-i18next** for multi-language support.
- **next-seo** for SEO meta tags.
- **lucide-react** for icons.
- `_app.js` must always use the template below. Change the app name, GA ID, domain, and font to match each site, but keep the structure:

```js
import "@/styles/globals.css";
import Layout from "@/components/layout";
import { appWithTranslation, useTranslation } from 'next-i18next'
import Head from "next/head";
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import Script from 'next/script';

function App({ Component, pageProps }) {

  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    const direction = ['ar', 'he', 'fa'].includes(i18n.language) ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [i18n.language]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-TEST', {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
    <DefaultSeo
      additionalMetaTags={[{
        name: 'application-name',
        content: 'MusicVerter'
      }]}
      openGraph={{
        images: [
          {
            url: 'https://musicverter.com/ogpreview.png'
          }
        ]
      }}
      additionalLinkTags={[
        {
          rel: 'manifest',
          href: '/manifest.json'
        },
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon.png',
          sizes: '180x180'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icons/favicon-32x32.png',
          sizes: '32x32'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icons/favicon-16x16.png',
          sizes: '16x16'
        }
      ]} />
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fjord+One&display=swap"
      />
      <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TEST');
        `
      }}
      />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-TEST`}
      />
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2234703663073578"
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default appWithTranslation(App);
```

---

## 2. No Duplicates — The #1 Rule

### Never repeat these across sites

- **HTML structure.** Every component (header, footer, cards, lists) must have different markup per site. Don't copy-paste layouts between projects.
- **Article structure.** Don't reuse the same skeleton. If one site uses "intro → body → wrap-up", the next must use something totally different like "example → breakdown" or "comparison table → explanation".
- **Meta tags.** Title tags and descriptions must use different sentence patterns and tones every time.
- **Filler phrases.** Never write "In this article, we will explore…", "Let's dive in", "In conclusion", "Without further ado", or any other AI-sounding phrase. These are banned.

### Before starting a new site

Pick a different combo from these 4 axes. Write your picks as a comment at the top of the code before doing anything else.

| Axis | What it means | Examples |
|---|---|---|
| **Layout** | Overall page structure | Single column, sidebar + content, card grid, magazine style, full-width sections, 2-column asymmetric |
| **Colors** | Color palette direction | Monochrome + 1 accent, earth tones, neutral grays, navy-based, warm beige, black & white only |
| **Typography feel** | How text looks and feels | Serif clean, sans-serif minimal, bold headings + thin body, large body text for easy reading |
| **Writing voice** | How articles sound | Expert tone, casual chat, dry and plain, journalism style, first-person story |

**At least 2 axes must be different from any previous site.**

---

## 3. Design Rules

### Do this

- **Clean and simple.** Use plenty of whitespace. Remove visual noise.
- **Easy to read first.** Body text must be big enough, line height must be comfortable, contrast must be clear.
- **Easy to navigate.** Users should find what they want within 3 seconds.
- **Mobile first.** Most traffic is mobile. Make it perfect on phones first.

### Don't do this

- No animations, transitions, or motion effects. None at all.
- No gradients, glassmorphism, or heavy shadows.
- No decorative icons or illustrations everywhere.
- No pointless hero sections or giant banner images.

---

## 4. SEO — HTML Focus

- Use semantic HTML (article, section, nav, header, footer, main, aside).
- Every page needs its own unique title and meta description.
- Follow heading order (h1 → h2 → h3). Never skip levels.
- All images must have meaningful alt text.
- Keep page load fast — cut unnecessary JS and CSS.
- **Match the search intent.** Figure out if the user wants info, wants to buy, wants to compare, or wants to find a specific site. Then write for that intent.
- Work keywords in naturally. Never stuff keywords.
- Build a logical internal link structure.
- Article length should fit the topic. Don't pad content just to make it longer.

---

## 5. Writing Rules

### Kill the AI sound

- **Use simple, everyday words.** Don't use big or fancy words when a normal one works. Google's algorithm can spot patterns in word choice. Write like a real person, not a textbook.
- Don't repeat the same sentence ending over and over.
- Mix paragraph lengths. Some short. Some longer. Make it feel natural.
- Every article needs real numbers, real examples, or real comparisons. No vague fluff.
- Never start with a boring intro. The first sentence is the hook — a surprising fact, a bold claim, or jump straight to the point.
- Change the article structure every time. One uses problem → fix. Another uses case study → analysis. Another uses comparison chart → deep dive.

### Writing voice consistency

Each site keeps its chosen voice the whole way through. But between sites, the voice must be clearly different. Don't let voice drift within a single site.

---

## 6. Code Quality

- Write semantic, accessible HTML.
- Don't nest divs for no reason.
- Name components based on what the site is about, not generic names. Don't use `Card`, `Section`, `Container` — use names that relate to the site's topic.
- Keep external packages to a minimum. Only add what you truly need.
- No heavy libraries that slow down the page.

