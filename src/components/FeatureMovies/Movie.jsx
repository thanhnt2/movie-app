import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "../ImageComponent";
import { useModalContext } from "../../context/ModalProvider";
import { Link } from "react-router-dom";

const Movie = (props) => {
  // console.log({ props });
  // const {
  //   data: { backdrop_path, title, release_date, overview },
  // } = props;

  const { openPopup } = useModalContext();

  return (
    <div>
      <ImageComponent
        src={props.data?.backdrop_path && `https://image.tmdb.org/t/p/original${props.data?.backdrop_path}`}
        className="aspect-video w-full brightness-50"
        width={900}
        height={500}
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
          <button
            className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg"
            onClick={() => {
              openPopup(
                <iframe
                  title="trailer"
                  src={`https://www.youtube.com/embed/${props?.trailerVideoKey}`}
                  className="aspect-video w-[50vw]"
                />,
              );
            }}
          >
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <Link to={`/movie/${props?.data.id}`}>
            <button className="rounded bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Movie;
