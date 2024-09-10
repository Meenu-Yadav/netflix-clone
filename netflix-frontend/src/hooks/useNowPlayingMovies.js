import axios from "axios";
import { API_NOW_PLAYING, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
const useNowPayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(API_NOW_PLAYING, options);
    dispatch(getNowPlayingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default useNowPayingMovies;
