import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.status(500).json({ name: "api > post route" });
};

export default handler;
