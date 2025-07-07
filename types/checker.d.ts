export declare const notEmptyString: (str?: any) => boolean;
export declare const notBlankString: (str?: any) => boolean;
export declare const notEmptyArray: (arr?: any) => boolean;
export declare const isArray: (arg: any) => arg is any[];
export declare const isSymbol: (value: any) => value is symbol;
export declare const isFunction: (value: any) => value is Function;
export declare const isObject: (value: unknown) => value is Record<any, any>;
export declare const isPlainObject: (value: any) => boolean;
export declare const isString: (value: any) => value is string;
export declare const isBoolean: (value: unknown) => value is boolean;
export declare const isFloat: (value: any) => value is number;
export declare const isNumber: (value: unknown) => value is number;
export declare const isBigNumber: (value: unknown) => value is bigint;
export declare const isNumberOrBigInt: (value: unknown) => value is number | bigint;
export declare const isUndef: (value: unknown) => value is undefined;
/**
 * This is really a _best guess_ promise checking. You
 * should probably use Promise.resolve(value) to be 100%
 * sure you're handling it correctly.
 */
export declare const isPromise: (value: any) => value is Promise<any>;
export declare const isDate: (value: any) => value is Date;
/**
 * Checks if the given value is primitive.
 *
 * Primitive Types: number , string , boolean , symbol, bigint, undefined, null
 *
 * @param {*} value value to check
 * @returns {boolean} result
 */
export declare const isPrimitive: (value: any) => boolean;
