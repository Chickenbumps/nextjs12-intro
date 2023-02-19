import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/post" ? "red" : "blue" }}
        href="/post"
      >
        Post
      </Link>
    </div>
  );
}
