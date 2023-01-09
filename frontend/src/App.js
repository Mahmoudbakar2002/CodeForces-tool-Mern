import ProfileView from "./profile-view";
import "./styles/App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [profileLoadding, setProfileLoadding] = useState(false);
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
    <div className="App">
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
              onFocus={(e) => setProfileLoadding(true)}
              onBlur={(e) => updateHandle(e.target.value)}
              className="text-field"
            />
          </div>
          <ProfileView loadding={profileLoadding} {...user} />
        </div>
      </div>
    </div>
  );
}

export default App;
