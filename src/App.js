import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./chomp/home-screen";
import LoginScreen from "./chomp/login-screen";
import SearchResultsScreen from "./chomp/search-results-screen";
import "./App.css";
import ResultDetailsScreen from "./chomp/result-details-screen";
import ProfileSettings from "./chomp/profile-screens";
import UserProfile from "./chomp/profile-screens/user-profile";
import store from "./chomp/redux/store";
import { Provider } from "react-redux";
import CurrentUserContext from "./chomp/redux/current-user-context";
import SearchRxScreen from "./chomp/search-rxs/search-rx-screen";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CurrentUserContext>
          <div className="box">
            <Routes>
              <Route index element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/searchRxs" element={<SearchRxScreen />} />
              <Route path="/search?" element={<SearchResultsScreen />} />
              <Route path="/search/:rxid" element={<ResultDetailsScreen />} />
              <Route path="/profile" element={<ProfileSettings />} />
              <Route path="/userSearch/:username" element={<UserProfile />} />
              <Route path="/userSearch/" element={<UserProfile />} />
            </Routes>
          </div>
        </CurrentUserContext>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
