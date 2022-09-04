import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, prompt } from '@prisma/client';
import { unstable_getServerSession } from 'next-auth';

import { authOptions } from './auth/[...nextauth]';

const prisma = new PrismaClient();

export type Prompt = prompt;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prompt[] | null>
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json(null);
    return;
  }

  const prompts = await prisma.prompt.findMany({
    where: { userId: session.user.id },
  });

  res.json(prompts);
}
