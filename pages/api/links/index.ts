// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import ShortUniqueId from "short-unique-id";
import absoluteUrl from "next-absolute-url";

type Data = {
  link: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const slug = new ShortUniqueId({ length: 6 });
    const { origin } = absoluteUrl(req);
    const link = await prisma.shortLink.create({
      data: {
        url: req.body.url,
        slug: slug(),
      },
    });
    res.status(200).json({ link: `${origin}/${link.slug}` });
  }
}
