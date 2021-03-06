export const delay = (timeout: number): any => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const checkId = () => {
  const { host } = window.location;
  let agentId = 1000161;
  if (process.env.NODE_ENV !== "development" && !host.includes("sit")) {
    agentId = 1000173;
  }
  return agentId;
};

export const isEmpty = (val) => {
  // null or undefined
  if (val == null) return true;

  if (typeof val === "boolean") return false;

  if (typeof val === "number") return !val;

  if (val instanceof Error) return val.message === "";

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case "[object String]":
    case "[object Array]":
      return !val.length;

    // Map or Set or File
    case "[object File]":
    case "[object Map]":
    case "[object Set]": {
      return !val.size;
    }
    // Plain Object
    case "[object Object]": {
      return !Object.keys(val).length;
    }
  }

  return false;
};

let uniqueIdIndex = 0;
export const uuid = (prefix: any = "") => {
  const random = Math.random().toString(13).split(".")[1] || ""
  return `${prefix || ""}${random.slice(0, 8)}${(uniqueIdIndex += 1)}`;
};
export const MODULE_AGENTID = checkId();
export const CLIENT_NONCE_KEY = "CLIENT_NONCE_KEY";
export const CLIENT_PUBLIC_KEY = "CLIENT_PUBLIC_KEY";
export const CLIENT_PRIVATE_KEY = "CLIENT_PRIVATE_KEY";
export const NONCE_PUBLIC_KEY =
  "c1d1804c7d8d99559ac1c155e0cec50fa2da3f0439e224f68bc92f99054a5946";
