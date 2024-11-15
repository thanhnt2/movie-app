import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  const [indexMovie, setIndexMovie] = useState(0);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWZmOTJmMmFmOGZlNWNiNWMzYTRmMGI5MzJiYjI1YiIsIm5iZiI6MTczMTEzODQ5Mi4zMzAzNzExLCJzdWIiOiI2NzJjODM5MWVjNWM2ZDUyOWZjNTdkMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xkm3caVWn4F9h-wqpREVN6vviWmGEU_FV1Tyaejpp70",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      const popularMovies = data.results.slice(0, 4);
      console.log(popularMovies);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
      //setIndexMovie(0);
    });
  }, []);

  console.log("movies", movies);
  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}

      {/* {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))} */}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
        // indexMovie={indexMovie}
        // setIndexMovie={setIndexMovie}
      />
    </div>
  );
};
export default FeatureMovies;
