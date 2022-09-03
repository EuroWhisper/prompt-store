import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, prompt } from '@prisma/client';

const prisma = new PrismaClient();

export type Prompt = prompt;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Prompt[] | null>
) {
    const prompts = await prisma.prompt.findMany();
    res.json(prompts);
}
