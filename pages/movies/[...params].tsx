import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface DatailPageProps {
  params: string[];
}

export default function Detail({ params }: DatailPageProps) {
  const router = useRouter();
  const [title, id] = params || [];

  return <h4>{title || "Loading..."}</h4>;
}

export const getServerSideProps: GetServerSideProps<DatailPageProps> = ({
  params,
}) => {
  return {
    props: { params: params?.params },
  };
};
