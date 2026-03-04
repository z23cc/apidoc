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
					items: [
						{ slug: 'guides/introduction' },
						{ slug: 'guides/installation' },
						{ slug: 'tutorials/permission-modes' },
						{ slug: 'tutorials/beginner-mistakes' },
						{ slug: 'tutorials/migrating-tools' },
					],
				},
				{
					label: '核心概念',
					translations: { en: 'Core Concepts' },
					items: [
						{ slug: 'tutorials/how-it-works' },
						{ slug: 'tutorials/basic-usage' },
						{ slug: 'tutorials/commands' },
						{ slug: 'tutorials/context-management' },
						{ slug: 'tutorials/model-selection' },
						{ slug: 'tutorials/rewind' },
						{ slug: 'tutorials/under-the-hood' },
						{ slug: 'tutorials/trust-calibration' },
						{ slug: 'tutorials/seeing-like-agent' },
					],
				},
				{
					label: '配置与定制',
					translations: { en: 'Configuration & Customization' },
					items: [
						{ slug: 'tutorials/claude-md-guide' },
						{ slug: 'tutorials/settings-permissions' },
						{ slug: 'tutorials/config-decision' },
						{ slug: 'tutorials/custom-commands' },
						{ slug: 'tutorials/custom-agents' },
						{ slug: 'tutorials/hooks' },
					],
				},
				{
					label: '提示词技巧',
					translations: { en: 'Prompting Techniques' },
					items: [
						{ slug: 'tutorials/structured-prompting' },
						{ slug: 'tutorials/semantic-anchors' },
						{ slug: 'tutorials/prompting-patterns' },
						{ slug: 'tutorials/learning-with-ai' },
					],
				},
				{
					label: '开发工作流',
					translations: { en: 'Development Workflows' },
					items: [
						{ slug: 'tutorials/plan-driven' },
						{ slug: 'tutorials/tdd' },
						{ slug: 'tutorials/spec-first' },
						{ slug: 'tutorials/iterative-refinement' },
						{ slug: 'tutorials/exploration' },
						{ slug: 'tutorials/skeleton-projects' },
						{ slug: 'tutorials/dual-instance' },
						{ slug: 'tutorials/task-management' },
						{ slug: 'tutorials/methodologies' },
						{ slug: 'tutorials/git-best-practices' },
						{ slug: 'tutorials/session-management' },
					],
				},
				{
					label: '扩展与集成',
					translations: { en: 'Extensions & Integration' },
					items: [
						{ slug: 'tutorials/mcp-ecosystem' },
						{ slug: 'tutorials/skills' },
						{ slug: 'tutorials/skillkit' },
						{ slug: 'tutorials/search-tools' },
						{ slug: 'tutorials/design-to-code' },
						{ slug: 'tutorials/third-party-tools' },
						{ slug: 'tutorials/ai-ecosystem' },
						{ slug: 'tutorials/ci-cd-integration' },
					],
				},
				{
					label: '团队协作',
					translations: { en: 'Team Collaboration' },
					items: [
						{ slug: 'tutorials/agent-teams' },
						{ slug: 'tutorials/agent-teams-quickstart' },
						{ slug: 'tutorials/team-ai-instructions' },
						{ slug: 'tutorials/agent-evaluation' },
						{ slug: 'tutorials/ai-traceability' },
					],
				},
				{
					label: '安全与运维',
					translations: { en: 'Security & Operations' },
					items: [
						{ slug: 'tutorials/security-hardening' },
						{ slug: 'tutorials/data-privacy' },
						{ slug: 'tutorials/production-safety' },
						{ slug: 'tutorials/sandbox-isolation' },
						{ slug: 'tutorials/sandbox-native' },
						{ slug: 'tutorials/devops-sre' },
						{ slug: 'tutorials/observability' },
					],
				},
				{
					label: '高级模式',
					translations: { en: 'Advanced Patterns' },
					items: [
						{ slug: 'tutorials/codebase-design' },
						{ slug: 'tutorials/cost-optimization' },
						{ slug: 'tutorials/legacy-modernization' },
						{ slug: 'tutorials/pdf-generation' },
						{ slug: 'tutorials/talk-pipeline' },
						{ slug: 'tutorials/tts-setup' },
					],
				},
				{
					label: '社区插件',
					translations: { en: 'Community Plugins' },
					items: [
						{ slug: 'tutorials/claude-mem' },
						{ slug: 'tutorials/flow-next' },
					],
				},
				{
					label: '参考',
					translations: { en: 'Reference' },
					items: [
						{ slug: 'reference/cheatsheet' },
						{ slug: 'reference/visual-reference' },
						{ slug: 'reference/search-tools' },
						{ slug: 'reference/api-overview' },
						{ slug: 'reference/known-issues' },
						{ slug: 'reference/changelog' },
						{ slug: 'tutorials/troubleshooting' },
						{ slug: 'tutorials/faq-myths' },
					],
				},
			],
		}),
	],
});
