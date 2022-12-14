import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, prompt } from '@prisma/client';

const prisma = new PrismaClient();

export type Prompt = prompt;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prompt | null>
) {
  if (req.method === 'DELETE') {
    const promptId = req.query.promptId as string;

    const prompt = await prisma.prompt.delete({
      where: { id: parseInt(promptId) },
    });
    res.json(prompt);
  }
}
