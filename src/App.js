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
import CurrentUserContext from "./chomp/redux/current-user-context";
import GroupLoginScreen from "./chomp/group-login-screen";
import SoloScreen from "./chomp/solo-session-screen";
import GroupSessionScreen from "./chomp/group-session-screen";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CurrentUserContext>
          <div className="box">
            <Routes>
              <Route index element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/search?" element={<SearchResultsScreen />} />
              <Route path="/search/:rxid" element={<ResultDetailsScreen />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/group" element={<GroupLoginScreen />} />
              <Route path="/group/:groupCode/search?" element={<GroupSessionScreen />} />
              <Route path="/solo" element={<SoloScreen />} />
            </Routes>
          </div>
        </CurrentUserContext>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
