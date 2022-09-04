/*
  Warnings:

  - Added the required column `userId` to the `prompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prompt" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "prompt" ADD CONSTRAINT "prompt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
