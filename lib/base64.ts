/*
 * @Author: TuXunJia
 * @Date: 2024-10-23 19:33:46
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-07 15:52:20
 * @Description: base64编解码
 */
import { Base64 } from "js-base64";
import { isPlainObject } from "./checker";

/**
 * @description: base64编码
 * @Date: 2024-10-23 19:47:29
 * @param {string} input
 * @return {*}
 */
export const base64Encode = (input: string | object): string => {
	if (typeof input !== "string" && !isPlainObject(input)) {
		throw new Error("base64 - encode: 入参格式错误");
	}
	const inputStr = typeof input === "string" ? input : JSON.stringify(input);
	return encodeURIComponent(Base64.encode(inputStr));
};

/**
 * @description: base64解码
 * @Date: 2024-10-23 19:47:51
 * @param {string} input
 * @return {*}
 */
export const base64Decode = (input: string): string | object => {
	if (typeof input !== "string") {
		throw new Error("base64 - decode: 入参格式错误");
	}
	if (!input) {
		return input;
	}
	const result = Base64.decode(decodeURIComponent(input));
	try {
		return JSON.parse(result);
	} catch {
		return result;
	}
};
