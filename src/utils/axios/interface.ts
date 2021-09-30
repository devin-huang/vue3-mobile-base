import { objectInterface } from "@/utils/interface";

export interface requestInterface {
  (
    url: string,
    params: objectInterface,
    config: objectInterface,
    method?: string
  ): void;
}

export interface responseInterface {
  data: objectInterface;
  message: string;
  url: string;
  encrypt: string;
  encryptType: string;
  headers?: objectInterface;
  cancelToken: any;
  config: objectInterface;
}

export interface responseErrorInterface {
  data: objectInterface;
  message: string;
}
