import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log("q:", router.query);
  return `${router.query.id}`;
}
