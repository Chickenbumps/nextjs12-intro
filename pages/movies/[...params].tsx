import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

interface Props {
  params: string[];
}

export default function Detail({ params }: Props) {
  const router = useRouter();
  const [title, id] = params || [];

  return <h4>{title || "Loading..."}</h4>;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  return {
    props: { params: params?.params as string[] },
  };
};
