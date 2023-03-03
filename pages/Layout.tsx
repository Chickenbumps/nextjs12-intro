import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

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
      <Footer />
    </>
  );
};

export default Layout;
