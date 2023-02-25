import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface PageProps {
  results: Object[];
}

export default function Home({ results }: PageProps) {
  return (
    <div className="container">
      {results?.map((movie: any) => (
        <div className="movie" key={movie.key}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { results }: any = await (
    await fetch(`${process.env.DEV_HOST_NAME}/api/movies`)
  ).json();
  return {
    props: { results },
  };
};
