'use client'

import { useEffect, useState } from "react"
import Button from "./components/button";
import Favs from "./components/favs";

export default function Home() {

  const [joke, setJoke] = useState([]);

  useEffect(() => {
    jokes()
  }, [])

  const jokes = () =>  {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value)
      }) 
  }

  return (
    <div>
      <div className="text-violet-300 text-center font-bold mt-10 text-3xl">
      Chuck Norris
      <div className="flex items-center justify-center m-20">
        <div className="bg-custom-purple w-96 laptop:w-1/2 desktop:w-1/2 h-auto rounded-2xl">
          <div className="text-violet-300 mt-5 text-2xl">Joke</div>
          <div className="text-white font-bold m-10 text-xl">"{joke}"</div>
          <div onClick={jokes} className="flex justify-center">
            <Button></Button>
            <Favs></Favs>
          </div>
        </div>
      </div>
      <div className="text-white">Lista Favoritos</div>
      <div></div>
      </div>
    </div>
  )
}
