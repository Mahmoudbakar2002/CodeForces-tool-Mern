import axios from "axios";

const cfApiURL = "https://codeforces.com/api";
const getSubmessionsURL = (handle) =>
  `${cfApiURL}/user.status?handle=${handle}`;

const getSubmessions = async (handle) => {
  try {
    if (!handle) throw new Error("handle requird");
    const { data } = await axios.get(getSubmessionsURL(handle));
    if (data.status === "OK") return data.result;
    else {
      throw new Error(`error in response : ${data.comment}`);
    }
  } catch (err) {
    console.log(err);
  }
};

const getSubmessionsAfterTime = async (handle, startSeconds = 0) => {
  try {
    let data = await getSubmessions(handle);
    return data.filter((e) => e.creationTimeSeconds >= startSeconds);
  } catch (err) {
    console.log(err);
  }
};

export { getSubmessionsAfterTime, getSubmessions };
