import { getSubmessionsAfterTime } from "./APIhandler";

const staticsFromSubmessions = (submessions) => {
  let maxRate = 0;
  const setofACS = new Set();
  const setofVirtual = new Set();
  const setofLive = new Set();

  submessions.forEach((element) => {
    if (element.author.participantType === "VIRTUAL")
      setofVirtual.add(element.contestId);
    if (element.author.participantType === "CONTESTANT")
      setofLive.add(element.contestId);

    if (element.verdict === "OK") {
      setofACS.add(`${element.problem.contestId}-${element.problem.index}`);
      maxRate = Math.max(maxRate, element.problem.rating ?? 0);
    }
  });
  return {
    maxRate,
    countOfSubmessions: submessions.length,
    countOfAC: setofACS.size,
    countOfVirtual: setofVirtual.size,
    countOfLive: setofLive.size,
  };
};

const getStaticsOfUser = async (handle, startSeconds = 0) => {
  try {
    const submessions = await getSubmessionsAfterTime(handle, startSeconds);
    const statics = staticsFromSubmessions(submessions);
    statics.handle = handle;
    return statics;
  } catch (error) {
    throw new Error("error in load data");
  }
};

const getStaticsOfUsers = async (handles, startSeconds = 0) => {
  // let data = [{ id: 0, handle: "test" }];
  console.log(handles);
  let promices = handles.map((handle) =>
    getStaticsOfUser(handle, startSeconds)
  );
  // [
  //   getStaticsOfUser("bakar", startSeconds),
  //   getStaticsOfUser("hngara", startSeconds),
  // ];
  return Promise.all(promices);
  // await handles.forEach(async (handle) => {
  //   try {
  //     let st = await getStaticsOfUser(handle, startSeconds);
  //     // console.log(st);
  //     st.id = idx++;
  //     // return st;
  //     // data.push(st);
  //     // await sleep(100);
  //   } catch (error) {
  //     // return {
  //     //   handle,
  //     // };
  //   }
  // });
  // // console.log(data);
  // return data;
};

// const staticsComparator = (a, b) => {
//   const compare = (x, y) => (x > y ? -1 : x < y ? 1 : 0);
//   const compareField = (field) => compare(a[field], b[field]);

//   // order is important it check one by one
//   const checkList = [
//     "countOfAC",
//     "maxRate",
//     "countOfLive",
//     "countOfVirtual",
//     "countOfSubmessions",
//   ];
//   for (let i = 0; i < checkList.length; i++) {
//     const check = compareField(checkList[i]);
//     console.log(check);
//     if (check !== 0) return check;
//   }
//   return 0;
// };
export { getStaticsOfUser, getStaticsOfUsers };
