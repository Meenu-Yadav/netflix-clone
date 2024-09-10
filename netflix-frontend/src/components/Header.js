import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constants";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { toggleSearch } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggleSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const toggleSearchHandler = () => {
    dispatch(toggleSearch());
  };
  return (
    <div className="absolute z-10 flex items-center w-[100vw] px-6 justify-between bg-gradient-to-b from-black">
      <img
        className="w-1/6"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="1.5rem" color="white" />
          <h1 className="text-lg font-medium text-white">{user.fullName}</h1>
          <div className="ml-4">
            <button
              onClick={logoutHandler}
              className="bg-red-700 text-white px-4 py-2 "
            >
              Logout
            </button>
            <button
              onClick={toggleSearchHandler}
              className="bg-red-700 text-white px-4 py-2 ml-2 "
            >
              {toggle ? "Home" : "Search"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
