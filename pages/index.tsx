import { useEffect, useState } from "react";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home() {
  const [movies, setMovies] = useState<Object[]>([]);

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(data.results);
    })();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie: any) => (
        <div key={movie.key}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}
