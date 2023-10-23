'use client'

import { useEffect, useState } from "react"
import {GenerateJoke, AddFavs} from "./components/Button";

export default function Home() {

  const [joke, setJoke] = useState('');
  const [favs, setFavs] = useState<string[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    jokes()
  }, [])

  const jokes = () =>  {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value)
      })
    setShow(true) 
  }

  const deleteFav = (item: string) => {
    var deleteFav = confirm('Are you sure?')
    if(deleteFav == true) {
      var index = favs.indexOf(item)
      console.log(index)
      favs.splice(index, 1)
    }
  }

  const handleJoke = (joke: any) => {
    const newJoke = [...favs];
    newJoke.push(joke);
    setFavs(newJoke);
    console.log(newJoke)
    setShow(false)
  }

  

  return (
    <div>
      <div className="text-violet-300 text-center font-bold mt-10 text-3xl">
      Chuck Norris
      <div className="flex items-center justify-center m-20">
        <div className="bg-custom-purple w-96 laptop:w-auto desktop:w-auto h-auto rounded-2xl">
          <div className="text-violet-300 mt-5 text-2xl">Joke</div>
          <div className="text-white font-bold m-10 text-xl">"{joke}"</div>
          <div className="flex items-center justify-center">
            <div onClick={jokes} className="flex justify-center">
              <GenerateJoke></GenerateJoke>
            </div>
            {show ? <div onClick={() => handleJoke(joke)} id="button" className="ml-5"><AddFavs></AddFavs></div> : null}
          </div>
        </div>
      </div>
      <div className="mb-10 text-violet-300">Lista de Favoritos</div>
        {favs.map(item =>
          <div key={item} className="flex items-center justify-between bg-custom-button text-white text-xl m-8 rounded-xl h-12 flex items-center justify-center h-16 h-auto"><div className="ml-6">{item}</div> <div className="text-red-300 cursor-pointer mr-6 font-bold" onClick={() => deleteFav(item)}>Apagar</div></div>
        )}
      </div>
    </div>
  )
}
