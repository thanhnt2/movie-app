import { Link } from "react-router-dom";
import ImageComponent from "../ImageComponent";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-300 bg-black shadow-sm"
    >
      <ImageComponent
        className="w-full rounded-lg"
        src={
          profilePath &&
          `https://media.themoviedb.org/t/p/w138_and_h175_face${profilePath}`
        }
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>
          {episodeCount > 1
            ? `${episodeCount} Episodes`
            : `${episodeCount} Episode`}
        </p>
      </div>
    </Link>
  );
};
export default ActorInfo;
