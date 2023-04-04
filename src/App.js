import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./chomp/home-screen";
import SearchRestaurantResults from "./chomp/search-results-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchRestaurantResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
