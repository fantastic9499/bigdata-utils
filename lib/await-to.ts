/*
 * @Author: TuXunJia
 * @Date: 2025-07-04 08:59:56
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-04 09:07:20
 * @Description: 无需 try-catch 即可轻松处理错误的 async/await 包装器
 * 代码来源：https://github.com/scopsy/await-to-js
 */

/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(
	promise: Promise<T>,
	errorExt?: object
): Promise<[U, undefined] | [null, T]> {
	return promise
		.then<[null, T]>((data: T) => [null, data])
		.catch<[U, undefined]>((err: U) => {
			if (errorExt) {
				const parsedError = Object.assign({}, err, errorExt);
				return [parsedError, undefined];
			}

			return [err, undefined];
		});
}
