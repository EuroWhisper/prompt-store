import { PrismaClient, prompt } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export type Prompt = prompt;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prompt | null>
) {
  if (req.method === "DELETE") {
    const promptId = req.query.promptId as string;
    console.log("deleting");
    console.log(promptId);
    const prompt = await prisma.prompt.delete({
      where: { id: parseInt(promptId) },
    });
    res.json(prompt);
  }
}
