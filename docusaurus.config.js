// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bananana',
  tagline: 'Bananana Coin – The First Community-Driven Icon',
  favicon: 'img/favicon.ico',
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://bananana.club',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bananana_club', // Usually your GitHub org/user name.
  projectName: 'bananana', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
    ],
    // locales: [
    //   'en', 'fa', 'es', 'fr', 'de', 'it', 'ru', 'zh-CN', 'zh-TW', 'zh-HK', 
    //   'ja', 'ko', 'ar', 'hi', 'pt', 'nl', 'tr', 'sv', 'da', 'fi', 'no', 
    //   'pl', 'cs', 'sk', 'hu', 'ro', 'bg', 'el', 'he', 'uk', 'th', 'vi', 
    //   'id', 'ms', 'tl'
    // ],
    localeConfigs: {
      // English
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        path: 'en',
      },
      
      // Persian (Farsi)
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        path: 'fa',
      },

      // Spanish
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
        path: 'es',
      },

      // French
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        path: 'fr',
      },

      // German
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-DE',
        path: 'de',
      },

      // Italian
      it: {
        label: 'Italiano',
        direction: 'ltr',
        htmlLang: 'it-IT',
        path: 'it',
      },

      // Russian
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
        path: 'ru',
      },

      // Chinese (Simplified)
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        path: 'zh-CN',
      },

      // Chinese (Traditional, Taiwan)
      'zh-TW': {
        label: '繁體中文（台灣）',
        direction: 'ltr',
        htmlLang: 'zh-TW',
        path: 'zh-TW',
      },

      // Chinese (Traditional, Hong Kong)
      'zh-HK': {
        label: '繁體中文（香港）',
        direction: 'ltr',
        htmlLang: 'zh-HK',
        path: 'zh-HK',
      },

      // Japanese
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        path: 'ja',
      },

      // Korean
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        path: 'ko',
      },

      // Arabic
      ar: {
        label: 'العربية',
        direction: 'rtl',
        htmlLang: 'ar-SA',
        path: 'ar',
      },

      // Hindi
      hi: {
        label: 'हिन्दी',
        direction: 'ltr',
        htmlLang: 'hi-IN',
        path: 'hi',
      },

      // Portuguese
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-PT',
        path: 'pt',
      },

      // Dutch
      nl: {
        label: 'Nederlands',
        direction: 'ltr',
        htmlLang: 'nl-NL',
        path: 'nl',
      },

      // Turkish
      tr: {
        label: 'Türkçe',
        direction: 'ltr',
        htmlLang: 'tr-TR',
        path: 'tr',
      },

      // Swedish
      sv: {
        label: 'Svenska',
        direction: 'ltr',
        htmlLang: 'sv-SE',
        path: 'sv',
      },

      // Danish
      da: {
        label: 'Dansk',
        direction: 'ltr',
        htmlLang: 'da-DK',
        path: 'da',
      },

      // Finnish
      fi: {
        label: 'Suomi',
        direction: 'ltr',
        htmlLang: 'fi-FI',
        path: 'fi',
      },

      // Norwegian
      no: {
        label: 'Norsk',
        direction: 'ltr',
        htmlLang: 'no-NO',
        path: 'no',
      },

      // Polish
      pl: {
        label: 'Polski',
        direction: 'ltr',
        htmlLang: 'pl-PL',
        path: 'pl',
      },

      // Czech
      cs: {
        label: 'Čeština',
        direction: 'ltr',
        htmlLang: 'cs-CZ',
        path: 'cs',
      },

      // Slovak
      sk: {
        label: 'Slovenčina',
        direction: 'ltr',
        htmlLang: 'sk-SK',
        path: 'sk',
      },

      // Hungarian
      hu: {
        label: 'Magyar',
        direction: 'ltr',
        htmlLang: 'hu-HU',
        path: 'hu',
      },

      // Romanian
      ro: {
        label: 'Română',
        direction: 'ltr',
        htmlLang: 'ro-RO',
        path: 'ro',
      },

      // Bulgarian
      bg: {
        label: 'Български',
        direction: 'ltr',
        htmlLang: 'bg-BG',
        path: 'bg',
      },

      // Greek
      el: {
        label: 'Ελληνικά',
        direction: 'ltr',
        htmlLang: 'el-GR',
        path: 'el',
      },

      // Hebrew
      he: {
        label: 'עברית',
        direction: 'rtl',
        htmlLang: 'he-IL',
        path: 'he',
      },

      // Ukrainian
      uk: {
        label: 'Українська',
        direction: 'ltr',
        htmlLang: 'uk-UA',
        path: 'uk',
      },

      // Thai
      th: {
        label: 'ไทย',
        direction: 'ltr',
        htmlLang: 'th-TH',
        path: 'th',
      },

      // Vietnamese
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
        htmlLang: 'vi-VN',
        path: 'vi',
      },

      // Indonesian
      id: {
        label: 'Bahasa Indonesia',
        direction: 'ltr',
        htmlLang: 'id-ID',
        path: 'id',
      },

      // Malay
      ms: {
        label: 'Bahasa Melayu',
        direction: 'ltr',
        htmlLang: 'ms-MY',
        path: 'ms',
      },

      // Filipino
      tl: {
        label: 'Filipino',
        direction: 'ltr',
        htmlLang: 'fil-PH',
        path: 'tl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/bananana_club/bananana.club/tree/main/packages/create-docusaurus/templates/shared/',
        },

        //blog: false,

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/bananana-social-card.jpg',
      themeConfig: {
        colorMode: {
          defaultMode: 'dark', // Set dark mode as default
          disableSwitch: false, // Allow users to switch themes
          respectPrefersColorScheme: true, // Automatically follow system preference
        },
      },
      navbar: {
        title: 'Bananana',
        logo: {
          alt: 'Bananana',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
          },
          {
            to: 'blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: 'song', 
            label: 'Song', 
            position: 'left'
          },
          {
            to: 'buy', 
            label: 'Buy', 
            position: 'left'
          },
          {
            href: 'https://t.me/bananana_club',
            label: 'Telegram',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'TL;DR',
            items: [
              {
                label: 'Introduction',
                to: '/introduction',
              },
              {
                label: 'Vision',
                to: '/vision',
              },
              {
                label: 'Rewards',
                to: '/rewards',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/bananana_club',
              },
              {
                label: 'X',
                href: 'https://x.com/bananana_club',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@bananana.club',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bananana.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-9EPYMS4R8K',
          anonymizeIP: true
        },
      ],
    ],
};

export default config;
