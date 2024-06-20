import GenericButton from "../GenericButton/GenericButton";

export default function JokeContainer(props: { getJoke: () => void, joke: string, show: boolean, handleFavorite: (joke: string) => void }) {
  return (
    <div className="flex items-center justify-center m-20">
      <div className="bg-custom-purple w-auto laptop:w-auto desktop:w-auto h-auto rounded-2xl">
        <div className="text-violet-300 mt-5 text-2xl">Joke</div>
        <div className="text-white font-bold m-10 text-xl">{props.joke}</div>
        <div className="flex items-center justify-center">
          <div onClick={props.getJoke} className="flex justify-center">
            <GenericButton phrase={"Generate Joke"} />
          </div>
          {props.show ? (
            <div
              onClick={() => props.handleFavorite(props.joke)}
              id="button"
              className="ml-5"
            >
              <GenericButton phrase={"Add to Favorites"} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
