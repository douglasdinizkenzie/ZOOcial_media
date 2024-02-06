/*
  Warnings:

  - Added the required column `followed_uuid` to the `followers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "followers" ADD COLUMN     "followed_uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "followingQuantity" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_followed_uuid_fkey" FOREIGN KEY ("followed_uuid") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
