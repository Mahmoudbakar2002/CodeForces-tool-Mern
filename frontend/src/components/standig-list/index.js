import "../../styles/App.css";
import { useState } from "react";
import axios from "axios";

export default function StandingPage() {
  const [profileLoadding, setProfileLoadding] = useState(false);
  const [ratingFrom, setRatingFrom] = useState(0);
  const [ratingTo, setRatingTo] = useState(4000);

  const [user, setUser] = useState({});

  const updateHandle = async (handle) => {
    try {
      const { data } = await axios.get(
        `https://codeforces.com/api/user.info?handles=${handle}`
      );
      const { result } = data;
      // console.log(result);
      setUser(result[0]);
    } catch (error) {
      setUser({});
      console.log(error);
    } finally {
      setProfileLoadding(false);
    }
  };

  return <div></div>;
}
