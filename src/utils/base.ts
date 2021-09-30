export function uuid(len: number, radix: number): string {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuidArr: Array<string> = [];
  let i;
  radix = radix || chars.length;

  if (len) {
    // eslint-disable-next-line no-bitwise
    for (i = 0; i < len; i++) uuidArr[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    let r;

    // rfc4122 requires these characters
    uuidArr[8] = uuidArr[13] = uuidArr[18] = uuidArr[23] = "-";
    uuidArr[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuidArr[i]) {
        // eslint-disable-next-line no-bitwise
        r = 0 | (Math.random() * 16);
        // eslint-disable-next-line no-bitwise
        uuidArr[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuidArr.join("");
}

export const delay = (timeout: number): any => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const debounce = (fn, wait = 500): any => {
  let timer: number;
  return (...arg) => {
    const context = this;
    const args = arg;
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
};

const checkId = () => {
  const { host } = window.location;
  let agentId = 1000161;
  if (process.env.NODE_ENV !== "development" && !host.includes("sit")) {
    agentId = 1000173;
  }
  return agentId;
};

export const formatSeconds = (
  seconds: number,
  hourText = "时",
  minuteText = "分",
  secondText = "秒"
): string => {
  let minutes = 0;
  let hours = 0;
  let result = "";

  if (seconds > 60) {
    minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (minutes > 60) {
      hours = Math.floor(minutes / 60);
      minutes = Math.floor(minutes % 60);
    }
  }

  if (seconds < 10 && seconds >= 0) {
    result = `0${seconds}${secondText}`;
  } else {
    result = `${seconds}${secondText}`;
  }

  if (minutes < 10 && minutes >= 0) {
    result = `0${minutes}${minuteText}${result}`;
  } else {
    result = `${minutes}${minuteText}${result}`;
  }

  if (hours > 0) {
    result = `${hours}${hourText}${result}`;
  } else {
    result = `00${hourText}${result}`;
  }

  return result;
};

export const findLastIndex = (matcher: any, array: Array<number>): number => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (matcher(array[i], i, array)) return i;
  }
  return -1;
};

export const takeBefore = (
  matcher: any,
  array: Array<number>
): Array<number> => {
  const index = array.findIndex(matcher);
  if (index === -1) return array;
  return array.slice(0, index);
};

export const dedupBy = (
  fieldName: string,
  array: Array<number>
): Array<number> => {
  const map = {};
  return array.filter((item) => {
    if (map[item[fieldName]]) return false;
    map[item[fieldName]] = true;
    return true;
  });
};

export const splitLinkText = (linkText: string): any => {
  const linkList = linkText.split("?") || [];

  if (linkList.length > 1) {
    const link = linkList[1];
    const items = link.split("&") || [];
    const linkInfo = {};
    items.map((item) => {
      const param = item.split("=") || [];
      if (param.length > 0) {
        let key = "";
        let value = "";
        if (param.length === 1) {
          key = param[0];
        } else if (param.length === 2) {
          key = param[0];
          value = param[1];
        }
        linkInfo[key] = value;
      }
      return item;
    });
    return linkInfo;
  } else {
    return {};
  }
};

export const MODULE_AGENTID = checkId();
export const CLIENT_NONCE_KEY = "CLIENT_NONCE_KEY";
export const CLIENT_PUBLIC_KEY = "CLIENT_PUBLIC_KEY";
export const CLIENT_PRIVATE_KEY = "CLIENT_PRIVATE_KEY";
export const NONCE_PUBLIC_KEY =
  "c1d1804c7d8d99559ac1c155e0cec50fa2da3f0439e224f68bc92f99054a5946";
