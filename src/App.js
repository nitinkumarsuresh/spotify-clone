import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import  Search  from "./components/Search/Search";
import SelectedPlaylist from "./components/SelectedPlaylist/SelectedPlaylist";
function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} /> 
            <Route path="/selectedplaylist" element={<SelectedPlaylist />} /> 
            
          </Routes>
        </Router>
  );
}

export default App;
