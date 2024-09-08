import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = (e) => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      const user = { eMail, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      dispatch(setLoading(true));
      const user = { fullName, eMail, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEMail("");
    setPassword("");
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="bg-img"
        />
      </div>
      <div className="flex justify-center items-center min-h-[100vh] min-w-[100vw]">
        <form
          onSubmit={getInputData}
          className=" flex flex-col opacity-80 items-center bg-black p-10 rounded-sm "
        >
          <h1 className="text-white mb-3 font-bold">
            {isLogin ? "Log In" : "Sign Up"}
          </h1>
          <div className="flex flex-col">
            {!isLogin && (
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="outline-none p-2 my-1 rounded-sm bg-gray-800 text-white"
              />
            )}
            <input
              type="text"
              value={eMail}
              onChange={(e) => setEMail(e.target.value)}
              placeholder="E-Mail"
              className="outline-none p-2 my-1 rounded-sm bg-gray-800 text-white"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-none p-2 my-1 rounded-sm bg-gray-800 text-white"
            />
            <button className="bg-red-700 font-medium p-2 my-1 rounded-sm text-white ">
              {`${isLoading ? "Loading..." : isLogin ? "Log In" : "Sign Up"}`}
            </button>
            <p className="text-white mt-1">
              {isLogin ? "New to Netflix?" : "Already have an account?"}
              <span
                onClick={loginHandler}
                className="text-sm ml-2 text-yellow-400"
              >
                {isLogin ? "SignUp" : "Log In"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
