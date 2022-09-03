import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, prompt } from '@prisma/client';
import validator from 'validator';

const prisma = new PrismaClient();

export type Prompt = prompt;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Prompt | null>
) {
    if (req.method === 'POST') {
        const { prompt } = req.body;
        const sanitizedPrompt = validator.escape(prompt);

        const newPrompt = await prisma.prompt.create({
            data: {
                prompt: sanitizedPrompt,
            },
        });
        res.json(newPrompt);
    }
}
