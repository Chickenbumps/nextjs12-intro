import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface PageProps {
  results: Object[];
}

export default function Home({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const onClickMovie = ({ id, title }: { id: number; title: string }) => {
    router.push(`/movies/${title}/${id}`);
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

// page가 요청받을 때 마다 pre-rendering
// 동적데이터 처리
export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const { results }: PageProps = await (
    await fetch(`${process.env.DEV_HOST_NAME}/api/movies`)
  ).json();
  return {
    props: { results },
  };
};

// // 빌드 시에 딱 한번 pre-rendering 되고 바로 static file로 빌드되어 이후 수정 불가.
// // 고정데이터 처리
// export const getStaticProps: GetStaticProps<PageProps> = async () => {
//   const { results }: PageProps = await (
//     await fetch(`${process.env.DEV_HOST_NAME}/api/movies`)
//   ).json();
//   return {
//     props: { results },
//   };
// };
