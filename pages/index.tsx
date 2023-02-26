import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface PageProps {
  results: Object[];
}

export default function Home({ results }: PageProps) {
  const router = useRouter();
  const onClickMovie = ({ id, title }: { id: number; title: string }) => {
    router.push(
      {
        pathname: `/movies/${id}/`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };

  return (
    <div className="container">
      {results?.map((movie: any) => (
        <div
          onClick={() => onClickMovie({ id: movie.id, title: movie.title })}
          className="movie"
          key={movie.id}
        >
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
        .movie {
          cursor: pointer;
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
