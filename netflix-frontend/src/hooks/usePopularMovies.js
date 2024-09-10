import axios from "axios";
import { API_POPULAR, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
const usePopularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(API_POPULAR, options);
    dispatch(getPopularMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default usePopularMovies;
