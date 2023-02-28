import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.status(200).send({ name: "api > post > comment route" });
};

export default handler;
