import './App.css';
import Home from "./components/Home";
import History from "./components/History"
import {Route, Routes} from "react-router-dom";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";
import Admin from "./components/AdminView";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/> } />
          <Route path={"/history"} element={<History />} />
          <Route path={"/pricing"} element={<Pricing />} />
          <Route path={"/schedule"} element={<Schedule />} />
          <Route path={"/admin"} element={<Admin />} />
      </Routes>
);
}

export default App;
