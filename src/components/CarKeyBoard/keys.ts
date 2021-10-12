interface keysCodeInterface<T> {
  label: T;
  value: T;
}

export const provinceCode: keysCodeInterface<string>[] = [
  {
    value: "粤",
    label: "粤",
  },
  {
    value: "赣",
    label: "赣",
  },
  {
    value: "闽",
    label: "闽",
  },
  {
    value: "湘",
    label: "湘",
  },
  {
    value: "苏",
    label: "苏",
  },
  {
    value: "京",
    label: "京",
  },
  {
    value: "沪",
    label: "沪",
  },
  {
    value: "浙",
    label: "浙",
  },
  {
    value: "川",
    label: "川",
  },
  {
    value: "晋",
    label: "晋",
  },
  {
    value: "蒙",
    label: "蒙",
  },
  {
    value: "皖",
    label: "皖",
  },
  {
    value: "吉",
    label: "吉",
  },
  {
    value: "津",
    label: "津",
  },
  {
    value: "鲁",
    label: "鲁",
  },
  {
    value: "豫",
    label: "豫",
  },
  {
    value: "鄂",
    label: "鄂",
  },
  {
    value: "冀",
    label: "冀",
  },
  {
    value: "黑",
    label: "黑",
  },
  {
    value: "桂",
    label: "桂",
  },
  {
    value: "琼",
    label: "琼",
  },
  {
    value: "渝",
    label: "渝",
  },
  {
    value: "辽",
    label: "辽",
  },
  {
    value: "贵",
    label: "贵",
  },
  {
    value: "云",
    label: "云",
  },
  {
    value: "藏",
    label: "藏",
  },
  {
    value: "陕",
    label: "陕",
  },
  {
    value: "甘",
    label: "甘",
  },
  {
    value: "青",
    label: "青",
  },
  {
    value: "宁",
    label: "宁",
  },
  {
    value: "新",
    label: "新",
  },
];

const number: keysCodeInterface<number>[] = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
];

const leter: keysCodeInterface<string>[] = [
  {
    value: "A",
    label: "A",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "C",
    label: "C",
  },
  {
    value: "D",
    label: "D",
  },
  {
    value: "E",
    label: "E",
  },
  {
    value: "F",
    label: "F",
  },
  {
    value: "G",
    label: "G",
  },
  {
    value: "H",
    label: "H",
  },
  {
    value: "J",
    label: "J",
  },
  {
    value: "K",
    label: "K",
  },

  {
    value: "L",
    label: "L",
  },
  {
    value: "M",
    label: "M",
  },
  {
    value: "N",
    label: "N",
  },
  {
    value: "P",
    label: "P",
  },
  {
    value: "Q",
    label: "Q",
  },
  {
    value: "R",
    label: "R",
  },
  {
    value: "S",
    label: "S",
  },
  {
    value: "T",
    label: "T",
  },
  {
    value: "U",
    label: "U",
  },
  {
    value: "V",
    label: "V",
  },
  {
    value: "W",
    label: "W",
  },
  {
    value: "X",
    label: "X",
  },
  {
    value: "Y",
    label: "Y",
  },
  {
    value: "Z",
    label: "Z",
  },
];

export const keysCode = [...number, ...leter];
