-- CreateTable
CREATE TABLE "user" (
    "uuid" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "image" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "post" (
    "uuid" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "author_uuid" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "post_comments" (
    "uuid" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "author_uuid" TEXT NOT NULL,
    "post_uuid" TEXT NOT NULL,

    CONSTRAINT "post_comments_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "post_likes" (
    "uuid" TEXT NOT NULL,
    "author_uuid" TEXT NOT NULL,
    "post_uuid" TEXT NOT NULL,

    CONSTRAINT "post_likes_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "followers" (
    "uuid" TEXT NOT NULL,
    "follower_uuid" TEXT NOT NULL,

    CONSTRAINT "followers_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_author_uuid_fkey" FOREIGN KEY ("author_uuid") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_comments" ADD CONSTRAINT "post_comments_author_uuid_fkey" FOREIGN KEY ("author_uuid") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_comments" ADD CONSTRAINT "post_comments_post_uuid_fkey" FOREIGN KEY ("post_uuid") REFERENCES "post"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_likes" ADD CONSTRAINT "post_likes_author_uuid_fkey" FOREIGN KEY ("author_uuid") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_likes" ADD CONSTRAINT "post_likes_post_uuid_fkey" FOREIGN KEY ("post_uuid") REFERENCES "post"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_follower_uuid_fkey" FOREIGN KEY ("follower_uuid") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
