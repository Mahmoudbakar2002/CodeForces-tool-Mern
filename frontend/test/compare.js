const staticsComparator = (a, b) => {
  const compare = (x, y) => (x > y ? -1 : x < y ? 1 : 0);
  const compareField = (field) => compare(a[field], b[field]);

  // order is important it check one by one
  const checkList = [
    "countOfAC",
    "maxRate",
    "countOfLive",
    "countOfVirtual",
    "countOfSubmessions",
  ];
  for (let i = 0; i < checkList.length; i++) {
    const check = compareField(checkList[i]);
    console.log(check);
    if (check !== 0) return check;
  }
  return 0;
};
let data0 = [
  {
    maxRate: 0,
    countOfSubmessions: 0,
    countOfAC: 0,
    countOfVirtual: 0,
    countOfLive: 0,
    handle: "sss",
  },
  {
    maxRate: 0,
    countOfSubmessions: 11,
    countOfAC: 6,
    countOfVirtual: 1,
    countOfLive: 0,
    handle: "hngara",
  },
  {
    maxRate: 0,
    countOfSubmessions: 10,
    countOfAC: 4,
    countOfVirtual: 1,
    countOfLive: 0,
    handle: "bakar",
  },
];
let data1 = [
  {
    maxRate: 0,
    countOfSubmessions: 11,
    countOfAC: 6,
    countOfVirtual: 1,
    countOfLive: 0,
    handle: "hngara",
  },
  {
    maxRate: 0,
    countOfSubmessions: 0,
    countOfAC: 0,
    countOfVirtual: 0,
    countOfLive: 0,
    handle: "sss",
  },
  {
    maxRate: 0,
    countOfSubmessions: 10,
    countOfAC: 4,
    countOfVirtual: 1,
    countOfLive: 0,
    handle: "bakar",
  },
];

data0.sort(staticsComparator);
data1.sort(staticsComparator);

console.table(data0);
console.table(data1);
