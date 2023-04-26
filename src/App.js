import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HomeScreen from "./chomp/home-screen";
import LoginScreen from "./chomp/login-screen";
import SearchResultsScreen from "./chomp/search-results-screen";
import ResultDetailsScreen from "./chomp/result-details-screen";
import ProfileSettings from "./chomp/profile-screens";
import SearchRxScreen from "./chomp/search-rxs/search-rx-screen";
import UserProfile from "./chomp/profile-screens/user-profile";
import FavoritesScreen from "./chomp/favorites-and-reviews/index";
import MyReviewsScreen from "./chomp/my-reviews";
import store from "./chomp/redux/store";
import CurrentUserContext from "./chomp/redux/current-user-context";
import "./App.css";

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
              <Route path="/search/:rxId" element={<ResultDetailsScreen />} />
              <Route path="/userSettings" element={<ProfileSettings />} />
              <Route path="/userSearch/:username" element={<UserProfile />} />
              <Route path="/userSearch" element={<UserProfile />} />
              <Route path="/favorites" element={<FavoritesScreen />} />
              <Route path="/myReviews" element={<MyReviewsScreen />} />
            </Routes>
          </div>
        </CurrentUserContext>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
