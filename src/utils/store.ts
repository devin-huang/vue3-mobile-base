// 全局数据对象
export const sharedData = new Map();
export const businessData = new Map();
export const authorityKey = "x-http-authInfo";
export const pageInfoKey = "x-http-pageInfo";

interface storagedInterface {
  (
    fieldName: string,
    needParse?: boolean,
    fieldValue?: string,
    needStringify?: boolean
  ): void;
}

/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export const getStoragedData: storagedInterface = (
  fieldName,
  needParse = true
): string => {
  return !needParse
    ? localStorage.getItem(fieldName)
    : JSON.parse(localStorage.getItem(fieldName) || "");
};

/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export const setStoragedData = (
  fieldName: string,
  fieldValue: string,
  needStringify = true
): void => {
  localStorage.setItem(
    fieldName,
    needStringify ? JSON.stringify(fieldValue) : fieldValue
  );
};

/**
 * **从本地存储中删除一个字段**
 * @param {string} fieldName 需要删除的本地存储数据的字段名
 */
export const removeStoragedData: storagedInterface = (fieldName) => {
  localStorage.removeItem(fieldName);
};

/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export const setSessionData = (
  fieldName: string,
  fieldValue: string,
  needStringify = true
): void => {
  sessionStorage.setItem(
    fieldName,
    needStringify ? JSON.stringify(fieldValue) : fieldValue
  );
};

/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export const getSessionData: storagedInterface = (
  fieldName,
  needParse = true
) => {
  return !needParse
    ? sessionStorage.getItem(fieldName)
    : JSON.parse(sessionStorage.getItem(fieldName) || "");
};

/**
 * **从本地存储中删除一个字段**
 * @param {string} fieldName 需要删除的本地存储数据的字段名
 */
export const removeSessionData: storagedInterface = (fieldName) => {
  sessionStorage.removeItem(fieldName);
};
