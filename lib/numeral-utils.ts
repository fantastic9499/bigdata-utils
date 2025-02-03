/*
 * @Author: TuXunJia
 * @Date: 2023-05-26 12:08:49
 * @LastEditors: TuXunJia
 * @LastEditTime: 2024-09-29 08:27:04
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

export const formatPrice = (price: number, fmt: string): string => {
	if (price !== 0 && (!price || typeof price !== "number")) {
		return "";
	}

	return numeral(price).format(fmt);
};

/**
 * 价格，四舍五入取整
 * @param fmt 是否格式化
 */
export const roundPrice = (price: number, fmt = true): string => {
	if (price !== 0 && (!price || typeof price !== "number")) {
		return "";
	}

	if (fmt) {
		return numeral(Math.round(price)).format(`0,0`);
	} else {
		return Math.round(price).toString();
	}
};

/**
 * 价格，向上取整
 * @param fmt 是否格式化
 */
export const ceilPrice = (price: number, fmt = true): string => {
	if (price !== 0 && (!price || typeof price !== "number")) {
		return "";
	}

	if (fmt) {
		return numeral(Math.ceil(price)).format(`0,0`);
	} else {
		return Math.ceil(price).toString();
	}
};
