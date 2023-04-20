import { profileThunk } from "../../services/users/users-thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
function CurrentUserContext({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const currentUser = useSelector((state) => state.users.currentUser);

  const getProfile = async () => {
    try {
      await dispatch(profileThunk());
    } catch (error) {
      if (error.response.status === 401) {
        console.log("User is not logged in");
        navigate("/"); 
      } else {
        console.log("Error occurred:", error.message);
      }
    }
  };

  useEffect(() => {
      getProfile();
  }, []);

  return children;
}

export default CurrentUserContext;