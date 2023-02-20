import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>HOME</h1>
      <style jsx>
        {`
          h1 {
            font-weight: bold;
            background-color: yellow;
          }
        `}
      </style>
    </>
  );
}
