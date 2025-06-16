import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopratedMovies(json.results));
  };
  useEffect(() => {
    getTopratedMovies();
  }, []);
};

export default useTopratedMovies;