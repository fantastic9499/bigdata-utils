/*
 * @Author: TuXunJia
 * @Date: 2024-10-17 09:46:38
 * @LastEditors: TuXunJia
 * @LastEditTime: 2024-10-17 09:52:34
 * @Description: 剪贴板
 */

/**
 * @description: 复制文本到剪贴板
 * @Date: 2024-10-17 09:47:42
 * @param {string} text
 * @return {*}
 */
export const copyTextToClipboard = async (text: string): Promise<boolean> => {
	if (navigator.clipboard && navigator.clipboard.writeText) {
		try {
			await navigator.clipboard.writeText(text);
			console.log("Text copied to clipboard");
			return true;
		} catch (err) {
			console.error("Failed to copy text: ", err);
			return fallbackCopyTextToClipboard(text);
		}
	} else {
		return fallbackCopyTextToClipboard(text);
	}
};

/**
 * @description: 复制文本到剪贴板（兼容旧版的浏览器）
 * @Date: 2024-10-17 09:48:03
 * @param {string} text
 * @return {*}
 */
const fallbackCopyTextToClipboard = (text: string): boolean => {
	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.style.position = "fixed"; // 防止在页面上显示
	document.body.appendChild(textarea);
	textarea.select();
	let success = false;
	try {
		success = document.execCommand("copy");
		const msg = success ? "successful" : "unsuccessful";
		console.log("Fallback: Copying text command was " + msg);
	} catch (err) {
		console.error("Fallback: Oops, unable to copy", err);
	}
	document.body.removeChild(textarea);
	return success;
};
