import { useEffect, useState } from "react";

export const useJoke = () => {
  const [joke, setJoke] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const unparsedList: any = localStorage.getItem("favoritesList");
    const parsedList = JSON.parse(unparsedList) ?? [];

    setFavorites(parsedList);
    getJoke();
  }, []);

  const deleteFavorite = (item: string) => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      const updatedFavorites = favorites.filter((phrase) => item !== phrase);
      setFavorites(updatedFavorites);
      localStorage.setItem("favoritesList", JSON.stringify(updatedFavorites));
    }
  };

  const handleFavorite = (joke: any) => {
    const newFavorites = [...favorites];
    newFavorites.push(joke);
    setFavorites(newFavorites);
    setShow(false);

    localStorage.setItem("favoritesList", JSON.stringify(newFavorites));
  };

  const getJoke = async () => {
    if (!process.env.NEXT_PUBLIC_API_KEY) return;

    await fetch("https://api.api-ninjas.com/v1/chucknorris?", {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      });
  };

  return {
    joke,
    favorites,
    show,
    handleFavorite,
    deleteFavorite,
    getJoke,
  };
};
