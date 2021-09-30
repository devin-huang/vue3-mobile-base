/*
 * @Author: Gavin.Wu
 * @Date: 2019-12-18 14:55:27
 * @Last Modified by: 黄德辉
 * @Last Modified time: 2021-09-30 15:58:22
 * @Description: axios 拦截器 初始数据配置
 */
import axios from "axios";
import { Toast } from "vant";
// import Dialog from "@/components/Dialog";
import { getStoragedData, sharedData } from "@/utils/store";
import userCustom, { codes, tokenKey } from "@/utils/axios/userCustom";
import { CLIENT_NONCE_KEY, CLIENT_PUBLIC_KEY } from "@/utils/base";
import { responseInterface } from "./interface";
import { objectInterface } from "@/utils/interface";

const encryptTo = (params, encrypt) => {
  if (encrypt) {
    const { payload } = encrypt(
      Object.prototype.toString.call(params) === "[object Object]"
        ? JSON.stringify(params)
        : params
    );
    return payload;
  }
  return params;
};

const map = new Map();
const keyJoin = (data: objectInterface) =>
  typeof data === "object" ? JSON.stringify(data) : data;

export const axiosDefault = {
  timeout: 30000, // 默认30秒
  headers: { ...userCustom },
};

// 请求参数处理
export const useRequest =
  (token: string): any =>
  (rs: responseInterface): responseInterface => {
    const { data, url, encrypt, encryptType } = rs;
    const keys = (url || "") + keyJoin(data || "");
    // 防止重复请求
    if (map.has(keys)) {
      map.get(keys)();
    }
    if (encryptType) {
      rs.headers = {
        ...userCustom,
        "x-client-pubkey": getStoragedData(CLIENT_PUBLIC_KEY),
        "x-client-nonce": getStoragedData(CLIENT_NONCE_KEY),
      };
      rs.data = encryptTo(data, sharedData.get(encrypt));
    }
    if (axios.CancelToken) {
      rs.cancelToken = new axios.CancelToken((c) => map.set(keys, c));
    }
    // 设置token
    (rs.headers as objectInterface)[tokenKey] = token;
    return rs;
  };

// 接口返回数据处理
export const useResponse = (rs: any): responseInterface => {
  const {
    config: { url, decrypt, encryptType },
  } = rs;
  let decryptData = rs.data;
  const keys = (url || "") + keyJoin(rs.data || "");

  if (map.has(keys)) map.delete(keys);

  if (!decryptData.code && encryptType) {
    const { getParseMessage } = sharedData.get(decrypt)(decryptData);
    if (getParseMessage) {
      decryptData = getParseMessage();
      rs.data = decryptData;
    }
  }

  // token过期 或者无效拦截
  if (decryptData && decryptData.code === 11005) {
    sessionStorage.removeItem("x-http-token");
    // Dialog("您登陆的状态已经过期，请退出后重新登陆", {
    //   confirmButtonText: "好的",
    // });
  }
  // if (codes.includes(decryptData.code)) {
  //   Toast(decryptData.message || '系统异常')
  // }
  if (+decryptData.code !== 200) {
    Toast(decryptData.message || "系统异常");
  }
  return rs;
};
export const getQueue = (): any => map;
export default Toast;
