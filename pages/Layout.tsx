import Navbar from "../components/navbar";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const obj: any = { "/": "Home", "/about": "About" };
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{obj[router.pathname]} | HELLO</title>
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
