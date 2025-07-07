/*
 * @Author: TuXunJia
 * @Date: 2025-02-06 23:00:07
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-06-13 16:07:41
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "常用工具函数集",
	description: "A VitePress Site",
	base: process.env.NODE_ENV === "production" ? "/bigdata-utils-docs/" : "/",
	srcDir: "",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "文档", link: "/guide/installation" },
		],
		sidebar: [
			{
				text: "指南",
				items: [{ text: "安装", link: "/guide/installation" }],
			},
			{
				text: "数字格式化相关函数",
				items: [{ text: "数字格式化", link: "/utils/numeral-utils" }],
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
