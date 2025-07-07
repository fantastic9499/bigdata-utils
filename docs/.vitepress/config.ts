/*
 * @Author: TuXunJia
 * @Date: 2025-02-06 23:00:07
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-07 19:24:28
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "常用工具函数集",
	description: "A VitePress Site",
	base: process.env.NODE_ENV === "production" ? "/bigdata-utils-docs/" : "/",
	srcDir: "",
	themeConfig: {
		search: {
			provider: "local",
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "文档", link: "/guide/installation" },
			{ text: "更新日志", link: "/changelog" },
		],
		sidebar: [
			{
				text: "指南",
				items: [{ text: "安装及功能介绍", link: "/guide/installation" }],
			},
			{
				text: "工具函数列表",
				items: [
					{ text: "数字格式化", link: "/utils/numeral-utils" },
					{ text: "类型判断", link: "/utils/checker" },
					{ text: "Base64编解码", link: "/utils/base64" },
					{ text: "剪贴板", link: "/utils/clipboard" },
					{ text: "await-to", link: "/utils/await-to" },
				],
			},
			// {
			// 	text: "Examples",
			// 	items: [
			// 		{ text: "Markdown Examples", link: "/markdown-examples" },
			// 		{ text: "Runtime API Examples", link: "/api-examples" },
			// 	],
			// },
		],
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/fantastic9499/bigdata-utils",
			},
		],
	},
});
