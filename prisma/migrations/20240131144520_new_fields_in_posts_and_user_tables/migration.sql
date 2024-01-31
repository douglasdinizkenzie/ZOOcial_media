-- AlterTable
ALTER TABLE "post" ADD COLUMN     "commentsQuantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "likesQuantity" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "followersQuantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "postsQuantity" INTEGER NOT NULL DEFAULT 0;
