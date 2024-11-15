import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  // let interval = null;
  // useEffect(() => {
  //   interval = setInterval(() => {
  //     indexMovie === 3 ? setIndexMovie(0) : setIndexMovie(indexMovie + 1);
  //   }, 5000);
  //   setTimeout(() => {
  //     clearInterval(interval);
  //   }, 5000);
  // }, [indexMovie]);

  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            onClick={() => setActiveMovieId(movie.id)}
            key={movie.id}
            className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
          ></li>
        ))}
        {/* <li className="h-1 w-6 cursor-pointer bg-slate-100"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li> */}
      </ul>
    </div>
  );
};
export default PaginateIndicator;
