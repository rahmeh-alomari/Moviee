import logo from "./logo.svg";
import "./App.css";
import Header from "./Compnents/Header";
import Add from "./Compnents/Add";
import Watched from "./Compnents/Watched";
import Watchlist from "./Compnents/Watchlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalProvider from "./Compnents/context/GlobalContext";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
