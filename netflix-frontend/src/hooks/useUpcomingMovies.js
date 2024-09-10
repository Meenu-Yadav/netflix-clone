import axios from "axios";
import { API_UPCOMING, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";
const useUpcomimgMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(API_UPCOMING, options);
    dispatch(getUpcomingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default useUpcomimgMovies;
