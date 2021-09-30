import { post } from "@/utils/axios";
import { objectInterface } from "@/utils/interface";

const encryptType = {
  encrypt: "encrypt",
  decrypt: "decrypt",
  encryptType: false,
};

interface paramsInterface {
  (propName: objectInterface): void;
}

// 获取收货地址列表
export const getUserAddressList: paramsInterface = (params) => {
  return post("/dj_member_api/address_list", params, encryptType);
};
