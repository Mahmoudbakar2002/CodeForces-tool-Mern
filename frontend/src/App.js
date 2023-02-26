import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProblemsetCreatorPage from "./components/problemsetcreator";
import StandingPage from "./components/standig-list";
import "./styles/App.css";
function App() {
  const home = (
    <div>
      <h1>It works Fine ✌</h1>
      <ul>
        <li>
          <a href="/problemset">problemset</a>
        </li>
        <li>
          <a href="/standing">standing</a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/problemset" element={<ProblemsetCreatorPage />} />
          <Route path="/standing" element={<StandingPage />} />
          <Route path="/" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
