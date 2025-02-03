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
export declare const formatPrice: (price: number, fmt: string) => string;
/**
 * 价格，四舍五入取整
 * @param fmt 是否格式化
 */
export declare const roundPrice: (price: number, fmt?: boolean) => string;
/**
 * 价格，向上取整
 * @param fmt 是否格式化
 */
export declare const ceilPrice: (price: number, fmt?: boolean) => string;
