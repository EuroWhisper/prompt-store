import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, prompt } from '@prisma/client';
import { unstable_getServerSession } from 'next-auth/next';
import validator from 'validator';

import { authOptions } from '../auth/[...nextauth]';

const prisma = new PrismaClient();

export type Prompt = prompt;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prompt | null>
) {
  if (req.method === 'POST') {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json(null);
      return;
    }

    const { prompt, seed } = req.body;
    const sanitizedPrompt = validator.escape(prompt);

    const newPrompt = await prisma.prompt.create({
      data: {
        userId: session.user.id,
        prompt: sanitizedPrompt,
        seed: seed,
      },
    });
    res.json(newPrompt);
  }
}
