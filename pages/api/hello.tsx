// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  ok?: true;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let result: Data = {
    name: "First name : Mte",
    ok: true,
  };

  res.status(200).json(result);
}
