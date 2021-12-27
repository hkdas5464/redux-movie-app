import React, { useEffect } from "react";
import Movielisting from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {fetchAsyncMovies ,fetchAsyncShows} from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-image"></div>
      <Movielisting />
    </div>
  );
}

export default Home;
