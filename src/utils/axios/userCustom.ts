import { MODULE_AGENTID } from "../base";
import config from "../../../package.json";
/*
    5000 系统异常
    5001 网络开小差！
    5002 调用服务{0}异常！
    5003 服务地址错误！
    5004 缺少必要的请求参数！
    5005 HTTP Headers MediaType 错误！
    5006 参数绑定异常，请检查表单填写的数据！
    5007 JSON转化异常！
    1001 登陆失效，请重新登陆！
    10005 非法的输入数据！
    11000 权限系统异常！
    11001 权限不足！
    11005 未登录或登录超时！
    11006 账号未找到！
    11101 参数错误，{0}不能为空！
    11102 参数错误，{0}不能小于{1}！
    11103 参数错误，{0}不能大于{1}！
    11104 参数错误，{0}最大长度不能超过{1}！
    11105 参数错误，{0}最小长度不能小于{1}！
    11106 参数错误，{0}不等于{1}！
    11107 参数错误，{0}只能介于{1}~{2}之间！
    19001 验证码错误或验证码已失效！
    11031 查询企业微信用户信息失败！
    800009 手机不合法
    800006 会员管理地址条数超出20条之内!
    3001
    5003 地址有误
  */
export const codes = [
  5000, 5001, 5002, 5004, 5005, 5006, 5007, 1001, 10005, 11000, 11001, 11006,
  11102, 11103, 11104, 11105, 11106, 11107, 19001, 3001, 11032, 57003, 11031,
  800009, 800006, 3001, 5003,
];
export const tokenKey = "x-http-token";

export default {
  Accept: "*/*",
  "Content-Type": "application/json; charset=UTF-8",
  "x-http-channel": "mini project",
  "x-http-devicetype": "h5",
  "x-http-timestamp": Date.now(),
  "x-http-deviceuid": Date.now(),
  "x-http-version": config.version,
  "x-http-module": MODULE_AGENTID,
};
