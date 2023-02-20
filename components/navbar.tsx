import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  useEffect(() => {
    console.log("router:", router.pathname);
  }, [router.pathname]);
  return (
    <nav>
      <Link
        legacyBehavior
        className={router.pathname == "/" ? "active" : ""}
        href="/"
      >
        Home
      </Link>
      <Link
        legacyBehavior
        className={router.pathname == "/post" ? "active" : ""}
        href="/post"
      >
        Post
      </Link>
    </nav>
  );
}
