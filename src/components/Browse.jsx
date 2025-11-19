import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

export const Browse = () => {
  const showGptsearch = useSelector((store) => store.gpt.showGptsearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />

      {showGptsearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
