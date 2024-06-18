"use client";

import { useEffect, useState } from "react";
import GenerateJoke from "../components/button";
import { useFetchJoke } from "../hooks/useFetchJoke";

export default function Jokes() {
  const [joke, setJoke] = useState("");
  const [favs, setFavs] = useState<string[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const listaNaoParseada: any = localStorage.getItem("listaFavoritos");
    const listaParseada = JSON.parse(listaNaoParseada) ?? [];

    setFavs(listaParseada);
    getJoke();
  }, []);
  
  const getJoke = async () => {
    const joke = await useFetchJoke();  
    setJoke(joke ?? "");
    setShow(true);
  };
  
  const deleteFav = (item: string) => {
    var deleteFav = confirm("Are you sure?");
    if (deleteFav == true) {
      const favoritosFiltrados = favs.filter((phrase) => item !== phrase);
      setFavs(favoritosFiltrados);
    }
  };

  const handleJoke = (joke: any) => {
    const newJoke = [...favs];
    newJoke.push(joke);
    setFavs(newJoke);
    setShow(false);

    const listaString = JSON.stringify(newJoke);
    localStorage.setItem("listaFavoritos", listaString);
  };

  return (
    <div>
      <div className="text-violet-300 text-center font-bold mt-10 text-3xl">
        Chuck Norris
        <div className="flex items-center justify-center m-20">
          <div className="bg-custom-purple w-auto laptop:w-auto desktop:w-auto h-auto rounded-2xl">
            <div className="text-violet-300 mt-5 text-2xl">Joke</div>
            <div className="text-white font-bold m-10 text-xl">{joke}</div>
            <div className="flex items-center justify-center">
              <div onClick={getJoke} className="flex justify-center">
                <GenerateJoke phrase={"Generate Joke"}></GenerateJoke>
              </div>
              {show ? (
                <div
                  onClick={() => handleJoke(joke)}
                  id="button"
                  className="ml-5"
                >
                  <GenerateJoke phrase={"Add Favorites"}></GenerateJoke>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mb-10 text-violet-300">Favorite List</div>
        {favs.map((item) => (
          <div
            key={item}
            className="bg-custom-button text-white text-xl m-8 rounded-xl h-12 flex items-center justify-center laptop:h-auto desktop:h-16"
          >
            <div className="m-6">{item}</div>{" "}
            <div
              className="text-red-300 cursor-pointer mr-6 font-bold"
              onClick={() => deleteFav(item)}
            >
              Apagar
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
