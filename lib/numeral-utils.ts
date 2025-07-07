/*
 * @Author: TuXunJia
 * @Date: 2023-05-26 12:08:49
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-07 10:33:30
 * @Description: 使用numeral做数字或金额转换
 */
import numeral from "numeral";

/**
 * @description: 将数字格式化为百分比
 * @Date: 2023-05-26 12:09:41
 * @param {number} percentage 带格式化数字
 * @param {boolean} forceFraction 是否强制格式化为带2位小数
 * @return {string}
 */
export const getPercentage = (
	percentage: number,
	forceFraction = false
): string => {
	if (percentage !== 0 && (!percentage || typeof percentage !== "number")) {
		return "";
	}

	if (percentage >= 1 && !forceFraction) {
		return numeral(percentage).format(`0%`);
	} else {
		return numeral(percentage).format(`0.00%`);
	}
};

/**
 * @description: 将数字格式化为带分隔符的金额
 * @Date: 2023-05-26 12:11:38
 * @param {number} price 金额数字
 * @return {string}
 */
export const getPrice = (price: number): string => {
	if (price !== 0 && (!price || typeof price !== "number")) {
		return "";
	}

	if (Number.isInteger(price)) {
		return numeral(price).format(`0,0`);
	} else {
		return numeral(price).format(`0,0.00`).split(".")[1] == "00"
			? numeral(price).format(`0,0`)
			: numeral(price).format(`0,0.00`);
		// return numeral(price).format(`0,0.0[0]`);
	}
};

/**
 * @description: 将数字格式化为指定格式
 * @Date: 2025-07-07 09:44:30
 * @param {number} price
 * @param {string} fmt
 * @return {string}
 */
export const format = (value: number, fmt: string): string => {
	if (value !== 0 && (!value || typeof value !== "number")) {
		return "";
	}

	return numeral(value).format(fmt);
};

/**
 * @description: 四舍五入取整，并格式化数字，默认格式化数字
 * @Date: 2025-07-07 09:49:50
 * @param {number} value
 * @param {boolean} fmt
 * @return {string}
 */
export const round = (value: number, fmt = true): string => {
	if (value !== 0 && (!value || typeof value !== "number")) {
		return "";
	}

	if (fmt) {
		return numeral(Math.round(value)).format(`0,0`);
	} else {
		return Math.round(value).toString();
	}
};

/**
 * @description: 向上取整，并格式化数字，默认格式化数字
 * @Date: 2025-07-07 09:49:50
 * @param {number} value
 * @param {boolean} fmt
 * @return {string}
 */
export const ceil = (value: number, fmt = true): string => {
	if (value !== 0 && (!value || typeof value !== "number")) {
		return "";
	}

	if (fmt) {
		return numeral(Math.ceil(value)).format(`0,0`);
	} else {
		return Math.ceil(value).toString();
	}
};

/**
 * @description: 向下取整，并格式化数字，默认格式化数字
 * @Date: 2025-07-07 10:33:30
 * @param {number} value
 * @param {boolean} fmt
 * @return {string}
 */
export const floor = (value: number, fmt = true): string => {
	if (value !== 0 && (!value || typeof value !== "number")) {
		return "";
	}

	if (fmt) {
		return numeral(Math.floor(value)).format(`0,0`);
	} else {
		return Math.floor(value).toString();
	}
};
