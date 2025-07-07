/*
 * @Author: TuXunJia
 * @Date: 2025-02-03 00:01:22
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-07 17:44:30
 */
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "./lib/index.ts",
			name: "bigdata-utils",
			fileName: "bigdata-utils",
		},
		rollupOptions: {
			external: ["numeral", "js-base64"],
			output: {
				globals: {
					numeral: "numeral",
					"js-base64": "js-base64",
				},
			},
		},
	},
});
