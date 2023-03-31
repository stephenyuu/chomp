import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./chomp/home";
import SearchRestaurantResults from "./chomp/search-restaurants-results";

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
