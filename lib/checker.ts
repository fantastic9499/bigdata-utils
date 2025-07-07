/*
 * @Author: TuXunJia
 * @Date: 2025-02-09 18:48:15
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-02-09 20:16:42
 * @Description: 类型相关工具函数
 */
export const notEmptyString = (str?: any): boolean =>
	typeof str === "string" && str !== "";

export const notBlankString = (str?: any): boolean =>
	typeof str === "string" && notEmptyString(str.trim());

export const notEmptyArray = (arr?: any) =>
	arr instanceof Array && arr.length > 0;

export const isArray = Array.isArray;

export const isSymbol = (value: any): value is symbol => {
	return !!value && value.constructor === Symbol;
};

export const isFunction = (value: any): value is Function => {
	return !!(value && value.constructor && value.call && value.apply);
};

// export const isObject = (value: any): value is object => {
// 	return !!value && value.constructor === Object;
// };

export const isObject = (value: unknown): value is Record<any, any> =>
	value !== null && typeof value === "object" && !Array.isArray(value);

export const isPlainObject = (value: any): boolean => {
	return (
		value !== null &&
		typeof value === "object" &&
		Object.prototype.toString.call(value) === "[object Object]"
	);
};

// export const isFunction = (value: unknown): value is Function =>
// 	typeof value === "function";

export const isString = (value: any): value is string =>
	typeof value === "string" || value instanceof String;

export const isBoolean = (value: unknown): value is boolean =>
	typeof value === "boolean";

export const isFloat = (value: any): value is number =>
	isNumber(value) && value % 1 !== 0;

export const isNumber = (value: unknown): value is number =>
	typeof value === "number";

export const isBigNumber = (value: unknown): value is bigint =>
	typeof value === "bigint";

export const isNumberOrBigInt = (value: unknown): value is number | bigint =>
	typeof value === "number" || typeof value === "bigint";

export const isUndef = (value: unknown): value is undefined =>
	typeof value === "undefined";

/**
 * This is really a _best guess_ promise checking. You
 * should probably use Promise.resolve(value) to be 100%
 * sure you're handling it correctly.
 */
export const isPromise = (value: any): value is Promise<any> => {
	if (!value) return false;
	if (!value.then) return false;
	if (!isFunction(value.then)) return false;
	return true;
};

export const isDate = (value: any): value is Date => {
	return Object.prototype.toString.call(value) === "[object Date]";
};

/**
 * Checks if the given value is primitive.
 *
 * Primitive Types: number , string , boolean , symbol, bigint, undefined, null
 *
 * @param {*} value value to check
 * @returns {boolean} result
 */
export const isPrimitive = (value: any): boolean => {
	return (
		value === undefined ||
		value === null ||
		(typeof value !== "object" && typeof value !== "function")
	);
};
