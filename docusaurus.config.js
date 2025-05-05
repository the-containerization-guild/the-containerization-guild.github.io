// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Containerization Guild",
  tagline: "",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://the-containerization-guild.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/website/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "the-containerization-guild", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: "./sidebars.js",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/RedHatOfficial/static-website-template-for-ospo/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          path: 'blog',
          routeBasePath: 'blog',
          blogSidebarTitle: 'Past Gatherings',
          blogSidebarCount: 'ALL',
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/RedHatOfficial/static-website-template-for-ospo/tree/main/",

          // Useful options to enforce blogging best practices
          
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        // title: "My Site",
        logo: {
          alt: "Containerization Guild Logo",
          src: "img/full-logo-2.png",
          srcDark: "img/full-logo-dark-2.png"
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "right",
          //   label: "Docs",
          // },
          { to: "/blog", label: "Archive", position: "right" },
          // {
          //   href: "https://github.com/RedHatOfficial/static-website-template-for-ospo/tree/main",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },

      // Config for footer here
      footer: {
        style: "dark",
        links: [
          {
            title: "Archive",
            items: [
              {
                label: "Past Gatherings",
                to: "/blog",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "X",
          //       href: "https://x.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              // {
              //   label: "GitHub",
              //   href: "https://github.com/",
              // },
            ],
          },
        ],
        copyright: `Supported by Red Hat | CC-BY-4.0 | Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
