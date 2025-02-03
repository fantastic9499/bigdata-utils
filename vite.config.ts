/*
 * @Author: TuXunJia
 * @Date: 2025-02-03 00:01:22
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-02-03 21:16:10
 * @Description:
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
			external: ["numeral"],
			output: {
				globals: {
					numeral: "numeral",
				},
			},
		},
	},
});
