"use client";

import { useJoke } from "./hooks/useJoke";
import FavoriteList from "./components/FavoriteList/FavoriteList";
import JokeContainer from "./components/JokeContainer/JokeContainer";

export default function Jokes() {
  const useJokes = useJoke();
  const { joke, favorites, show, handleFavorite, deleteFavorite, getJoke } =
    useJokes;
  return (
    <div>
      <div className="text-violet-300 text-center font-bold mt-10 text-3xl">
        Chuck Norris
        <JokeContainer
          joke={joke}
          show={show}
          handleFavorite={handleFavorite}
          getJoke={getJoke}
        />
        <FavoriteList favorites={favorites} deleteFavorite={deleteFavorite} />
      </div>
    </div>
  );
}
