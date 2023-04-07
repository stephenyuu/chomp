import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomeScreen from "./chomp/home-screen";
import LoginScreen from "./chomp/login-screen";
import SearchResultsScreen from "./chomp/search-results-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/search?" element={<SearchResultsScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
