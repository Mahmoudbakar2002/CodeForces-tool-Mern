import ProfileView from "./profile-view";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [loadding, setLoadding] = useState(false);

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
              onFocus={(e) => setLoadding(true)}
              onBlur={(e) => setLoadding(false)}
              className="text-field"
            />
          </div>
          <ProfileView loadding={loadding} />
        </div>
      </div>
    </div>
  );
}

export default App;
