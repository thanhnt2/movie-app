import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import MovieInformation from "../components/MediaDetail/MovieInformation";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRelatedMoviesLoading, setIsRelatedMoviesLoading] = useState(false);
  const [relatedMovies, setrelatedMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWZmOTJmMmFmOGZlNWNiNWMzYTRmMGI5MzJiYjI1YiIsIm5iZiI6MTczMTEzODQ5Mi4zMzAzNzExLCJzdWIiOiI2NzJjODM5MWVjNWM2ZDUyOWZjNTdkMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xkm3caVWn4F9h-wqpREVN6vviWmGEU_FV1Tyaejpp70",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        setMovieInfo(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  console.log("Env:",import.meta.env.VITE_API_TOKEN)

  useEffect(() => {
    setIsRelatedMoviesLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        // Authorization:
        // "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWZmOTJmMmFmOGZlNWNiNWMzYTRmMGI5MzJiYjI1YiIsIm5iZiI6MTczMTEzODQ5Mi4zMzAzNzExLCJzdWIiOiI2NzJjODM5MWVjNWM2ZDUyOWZjNTdkMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xkm3caVWn4F9h-wqpREVN6vviWmGEU_FV1Tyaejpp70",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log({ recommendation: data });
        const currentRelatedMovies = (data.results || []).slice(0, 12);
        setrelatedMovies(currentRelatedMovies);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsRelatedMoviesLoading(false));
  }, [id]);

  if (isLoading || isRelatedMoviesLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw]">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 text-white sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMovies} />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
