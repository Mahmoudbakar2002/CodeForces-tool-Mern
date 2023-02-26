import ProfileView from "./profile-view";
import "../../styles/App.css";
import { useState } from "react";
import axios from "axios";

export default function ProblemsetCreatorPage() {
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

  return (
    <div>
      <h1>
        <img
          className="codeforces-logo"
          src="/assets/images/Codeforces_logo.png"
          alt="codeforces-logo"
        />
        Code Forces Tool
      </h1>
      <div className="main--form">
        <div className="handle-form">
          <div>
            <label>Enter Your Handle : </label>
            <br />
            <input
              type="text"
              onChange={(e) => setProfileLoadding(true)}
              onBlur={(e) => updateHandle(e.target.value)}
              className="text-field"
            />
          </div>
          <ProfileView loadding={profileLoadding} {...user} />
        </div>
        <div className="rating-form">
          <label className="text-bold">Rating:</label>
          <div>
            from:
            <input
              type="number"
              className="text-field"
              placeholder="0"
              value={ratingFrom}
              onChange={(e) =>
                setRatingFrom(e.target.value < 0 ? 0 : e.target.value)
              }
              min="0"
            />
            to:
            <input
              type="number"
              className="text-field"
              placeholder="4000"
              value={ratingTo}
              onChange={(e) => setRatingTo(e.target.value)}
              onBlur={() =>
                ratingTo <= ratingFrom
                  ? setRatingTo(Number(ratingFrom) + 1)
                  : ""
              }
              min={Number(ratingFrom) + 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
