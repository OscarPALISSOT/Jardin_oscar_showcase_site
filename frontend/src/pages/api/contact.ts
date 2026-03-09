import { createDirectus, createItem, rest, staticToken } from "@directus/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

const client = createDirectus(process.env.NEXT_DIRECTUS_INTERNAL_URL!).with(rest());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, message } = req.body;
  try {
    await client.request(createItem("contact_messages", { email, message }));
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}