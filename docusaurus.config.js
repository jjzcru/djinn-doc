// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Djinn',
	tagline: 'IoT Simplified',
	url: 'https://djinn.fennex.dev',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'jjzcru', // Usually your GitHub org/user name.
	projectName: 'Djinn', // Usually your repo name.
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Djin',
				logo: {
					alt: 'Djinn Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Architecture',
					},
					/*{
						type: 'doc',
						docId: 'glossary',
						position: 'left',
						label: 'Glossary',
					},*/
					// { to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/jjzcru/djinn',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Architecture',
						items: [
							{
								label: 'Djinn',
								to: '/docs/architecture',
							},
							{
								label: 'Djinn Board',
								to: '/docs/djinn-board/overview',
							},
							{
								label: 'Djinn Cloud',
								to: '/docs/djinn-cloud/overview',
							},
							{
								label: 'Djinn Client',
								to: '/docs/djinn-client/overview',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Github',
								href: 'https://github.com/jjzcru/djinn',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/jjzcru',
							},
						],
					},
					/*{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/jjzcru/djinn',
							},
						],
					},*/
				],
				copyright: `Djinn 🧞‍♂️. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			zoom: {
				selector: '.markdown :not(em) > img',
				config: {
					// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
					background: {
						light: 'rgb(255, 255, 255)',
						dark: 'rgb(50, 50, 50)',
					},
				},
			},
		}),
	plugins: [
		require.resolve('docusaurus-plugin-image-zoom'),
		[
			'@docusaurus/plugin-pwa',
			{
				debug: true,
				offlineModeActivationStrategies: [
					'appInstalled',
					'standalone',
					'queryString',
				],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/logo.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json', // your PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(7, 64, 126)',
					},
				],
			},
		],
	],
};

module.exports = config;
