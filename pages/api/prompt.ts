import { PrismaClient, prompt } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export type Prompt = prompt;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prompt | null>
) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    const newPrompt = await prisma.prompt.create({
      data: {
        prompt,
      },
    });
    res.json(newPrompt);
  }
  if (req.method === "GET") {
    const id = req.query.id;

    const prompt = await prisma.prompt.findFirst({
      where: { id: id ? parseInt(id) : "" },
    });
    res.json(prompt);
  }
}
