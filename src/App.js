import './App.css';
import Home from "./components/Home";
import History from "./components/History"
import {Route, Routes} from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/> } />
          <Route path={"/history"} element={<History />} />
      </Routes>

);
}

export default App;
