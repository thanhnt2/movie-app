import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState(tabs[0]?.id);
  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeMovieId)?.url;
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWZmOTJmMmFmOGZlNWNiNWMzYTRmMGI5MzJiYjI1YiIsIm5iZiI6MTczMTEzODQ5Mi4zMzAzNzExLCJzdWIiOiI2NzJjODM5MWVjNWM2ZDUyOWZjNTdkMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xkm3caVWn4F9h-wqpREVN6vviWmGEU_FV1Tyaejpp70",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log({ data });
      const trendingMediaList = data.results.slice(0, 12);
      setMediaList(trendingMediaList);
    });
  }, [activeMovieId, tabs]);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex gap-2 rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeMovieId ? "bg-white text-black" : ""}`}
              onClick={() => setActiveMovieId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-6 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            title={media.original_title || media.original_name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type || activeMovieId}
          />
        ))}
      </div>
    </div>
  );
};
export default MediaList;
