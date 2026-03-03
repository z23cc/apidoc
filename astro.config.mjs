// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Claude Code 使用教程',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: {
					label: 'English',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/anthropics/claude-code',
				},
			],
			sidebar: [
				{
					label: '快速开始',
					translations: { en: 'Getting Started' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: '基础教程',
					translations: { en: 'Basic Tutorials' },
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'API 参考',
					translations: { en: 'API Reference' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
