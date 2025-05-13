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

  // When forking or editing the site, please change the URL, organisationName and projectName to your own.

  // url: "https://containerizationguild.org/",
  // baseUrl: "/",
  // organizationName: "the-containerization-guild",
  // projectName: "the-containerization-guild.github.io",

  url: "https://containerizationguild.org/",
  baseUrl: "/",
  organizationName: "the-containerization-guild",
  projectName: "the-containerization-guild.github.io",

  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          path: "blog",
          routeBasePath: "blog",

          blogTitle: "The Containerization Guild",
          blogDescription:
            "The Containerization Guild is a community of containerization enthusiasts who gather to share knowledge and experiences.",
          blogSidebarTitle: "Past Gatherings",
          blogSidebarCount: "ALL",

          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
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
        logo: {
          alt: "Containerization Guild Logo",
          src: "img/favicon.png",
        },
        items: [
          { to: "/blog", label: "Archive", position: "right" },
          {
            href: "https://bsky.app/profile/container-guild.bsky.social",
            label: "BlueSky",
            position: "right",
          },
          {
            href: "https://discord.gg/78UWpqumcm",
            label: "Join our Discord!",
            position: "right",
          },
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
          {
            title: "Community",
            items: [
              {
                label: "BlueSky",
                href: "https://bsky.app/profile/container-guild.bsky.social",
              },
              {
                label: "Discord",
                href: "https://discord.gg/78UWpqumcm",
              },
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
