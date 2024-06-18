export const useFetchJoke = async () => {
  let joke = "";
  if (!process.env.NEXT_PUBLIC_API_KEY) return;
  
  await fetch("https://api.api-ninjas.com/v1/chucknorris?", {
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      joke = data.joke;
    });
    return joke;
};