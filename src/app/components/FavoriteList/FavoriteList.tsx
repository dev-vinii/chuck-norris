export default function FavoriteList(props: {
  favorites: string[];
  deleteFavorite: (item: string) => void;
}) {
  return (
    <>
      <div className="mb-10 text-violet-300">Favorite List</div>
      {props.favorites.map((item: string) => (
        <div
          key={item}
          className="bg-custom-button text-white text-xl m-8 rounded-xl h-12 flex items-center justify-center laptop:h-auto desktop:h-16"
        >
          <div className="m-6">{item}</div>
          <div
            className="text-red-300 cursor-pointer mr-6 font-bold"
            onClick={() => props.deleteFavorite(item)}
          >
            Delete
          </div>
        </div>
      ))}
    </>
  );
}
