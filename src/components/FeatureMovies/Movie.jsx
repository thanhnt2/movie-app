import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = (props) => {
  console.log({ props });
  // const {
  //   data: { backdrop_path, title, release_date, overview },
  // } = props;

  

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${props.data?.backdrop_path}`}
        className="aspect-video brightness-50 w-full"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{props.data?.title}</p>
        <div>
          <p className="mb-1 inline-block border border-slate-400 p-1 text-slate-400">
            PG 13
          </p>
          <p className="text-[1.2vw]">{props.data?.release_date}</p>
        </div>
        <div className="mt-4 hidden text-[1.2vw] sm:block">
          <p className="mb-2 font-bold">Overview</p>
          <p>{props.data?.overview}</p>
        </div>
        <div className="mt-4">
          <button className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <button className="rounded bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};
export default Movie;
