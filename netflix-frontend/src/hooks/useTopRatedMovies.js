import axios from "axios";
import { API_TOP_RATED, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../redux/movieSlice";
const useTopRatedMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(API_TOP_RATED, options);
    dispatch(getTopRatedMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default useTopRatedMovies;
