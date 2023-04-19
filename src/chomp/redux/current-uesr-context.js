import { profileThunk } from "../../services/users/users-thunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function CurrentUserContext({ children }) {
  const dispatch = useDispatch();
  const getProfile = async () => {
    await dispatch(profileThunk());
  };
  useEffect(() => {
    getProfile();
  }, []);

  return children;
}

export default CurrentUserContext;