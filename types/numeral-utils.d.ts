/**
 * @description: 将数字格式化为百分比
 * @Date: 2023-05-26 12:09:41
 * @param {number} percentage 带格式化数字
 * @param {boolean} forceFraction 是否强制格式化为带2位小数
 * @return {string}
 */
export declare const getPercentage: (percentage: number, forceFraction?: boolean) => string;
/**
 * @description: 将数字格式化为带分隔符的金额
 * @Date: 2023-05-26 12:11:38
 * @param {number} price 金额数字
 * @return {string}
 */
export declare const getPrice: (price: number) => string;
/**
 * @description: 将数字格式化为指定格式
 * @Date: 2025-07-07 09:44:30
 * @param {number} price
 * @param {string} fmt
 * @return {string}
 */
export declare const format: (value: number, fmt: string) => string;
/**
 * @description: 四舍五入取整，并格式化数字，默认格式化数字
 * @Date: 2025-07-07 09:49:50
 * @param {number} value
 * @param {boolean} fmt
 * @return {string}
 */
export declare const round: (value: number, fmt?: boolean) => string;
/**
 * @description: 向上取整，并格式化数字，默认格式化数字
 * @Date: 2025-07-07 09:49:50
 * @param {number} value
 * @param {boolean} fmt
 * @return {string}
 */
export declare const ceil: (value: number, fmt?: boolean) => string;
/**
 * @description: 向下取整，并格式化数字，默认格式化数字
 * @Date: 2025-07-07 10:33:30
 * @param {number} value
 * @param {boolean} fmt
 * @return {string}
 */
export declare const floor: (value: number, fmt?: boolean) => string;
