import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug as string;
  if (!slug) {
    return res.redirect("/");
  }

  const link = await prisma.shortLink.findUnique({
    where: {
      slug,
    },
  });

  if (!link) {
    return res.json({ url: null });
  }

  return res.json({ url: link.url });
}
