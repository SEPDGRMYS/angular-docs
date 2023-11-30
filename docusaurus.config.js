// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "DGRMyS Angular Docs",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://GodHandSeeker.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/ng-docs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "GodHandSeeker", // Usually your GitHub org/user name.
    projectName: "ng-docs", // Usually your repo name.
    trailingSlash: false,

    deploymentBranch: 'deploy',
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".

    // i18n: {
    //     defaultLocale: "es",
    //     locales: ["es"],
    // },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                blog: false, // Optional: disable the blog plugin
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            // image: "img/1024px-sep-logo-2019-svg.webp",
            navbar: {
                title: "DGRMyS",
                logo: {
                    alt: "DGRMyS",
                    src: "img/1024px-sep-logo-2019-svg.webp",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Dev Docs",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Documentación y Ayuda",
                        items: [
                            {
                                label: "Angular Docs",
                                href: "https://angular.io/docs",
                            },
                            {
                                label: "Angular YouTube Course",
                                href: "https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF",
                            },
                            {
                                label: "Angular Training",
                                href: "https://worldline.github.io/angular-training/",
                            },
                            {
                                label: "Angular Training",
                                href: "https://angular.io/tutorial/first-app",
                            },
                            {
                                label: "Guía de comandos",
                                href: "https://devtalles.com/files/angular-cheat-sheet.pdf",
                            },
                        ],
                    },
                    // {
                    //     title: "Community",
                    //     items: [
                    //         {
                    //             label: "Stack Overflow",
                    //             href: "https://stackoverflow.com/questions/tagged/docusaurus",
                    //         },
                    //         {
                    //             label: "Discord",
                    //             href: "https://discordapp.com/invite/docusaurus",
                    //         },
                    //         {
                    //             label: "Twitter",
                    //             href: "https://twitter.com/docusaurus",
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Angular Docs | DGRMyS. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
