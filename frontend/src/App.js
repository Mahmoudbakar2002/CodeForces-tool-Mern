import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProblemsetCreatorPage from "./components/problemsetcreator";
import StandingPage from "./components/standig-list";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/problemset" exact element={<ProblemsetCreatorPage />} />
          <Route path="/standing" exact element={<StandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
