/*
 * @Author: Gavin.Wu
 * @Date: 2019-12-17 15:18:46
 * @Last Modified by: 黄德辉
 * @Last Modified time: 2021-09-30 15:51:20
 * @Description: 简单二次封装
 */

import axios from "axios";
import Toast, {
  useRequest,
  useResponse,
  getQueue,
  axiosDefault,
} from "./config";
import {
  responseInterface,
  requestInterface,
  responseErrorInterface,
} from "./interface";

const Axios = axios.create(axiosDefault);

const setupAxios = (token: string): void => {
  Axios.interceptors.request.use(useRequest(token), (e) => Promise.reject(e));

  Axios.interceptors.response.use(useResponse, (e) => {
    if (axios.isCancel(e)) {
      // 路由切换 请求被取消 清空队列
      if (e.message) getQueue().clear();
      throw new axios.Cancel("cancel request");
    }

    Toast({ message: "网络请求失败", duration: 3000 });
    return Promise.reject(e);
  });
};

const request: requestInterface = (url, params, config, method = "post") => {
  return new Promise((resolve, reject) => {
    Axios[method](url, params, { ...config })
      .then(
        (rs: responseInterface) => {
          resolve(rs.data);
        },
        (e: responseErrorInterface) => {
          resolve({ e });
        }
      )
      .catch((e) => {
        reject(e);
      });
  });
};

const post: requestInterface = (url, params, c) =>
  request(url, params, c || {}, "post");

const get: requestInterface = (url, params, c) =>
  request(url, params, c || {}, "get");

export { setupAxios, axios, request, post, get };
