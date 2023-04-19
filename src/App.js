import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./chomp/home-screen";
import LoginScreen from "./chomp/login-screen";
import SearchResultsScreen from "./chomp/search-results-screen";
import "./App.css";
import ResultDetailsScreen from "./chomp/result-details-screen";
import Profile from "./chomp/profile-screen";
import store from "./chomp/redux/store";
import { Provider } from "react-redux";
import CurrentUserContext from "./chomp/redux/current-uesr-context";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Provider store={store}>
        <CurrentUserContext>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/search?" element={<SearchResultsScreen />} />
          <Route path="/search/:rxid" element={<ResultDetailsScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </CurrentUserContext>
      </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
