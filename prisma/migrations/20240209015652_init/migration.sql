-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'VENDOR');

-- CreateTable
CREATE TABLE "UserHandcrafted" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserHandcrafted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductHandcrafted" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "stock" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProductHandcrafted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewHandcrafted" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ReviewHandcrafted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryHandcrafted" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryHandcrafted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryHandcraftedToProductHandcrafted" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserHandcrafted_email_key" ON "UserHandcrafted"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryHandcraftedToProductHandcrafted_AB_unique" ON "_CategoryHandcraftedToProductHandcrafted"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryHandcraftedToProductHandcrafted_B_index" ON "_CategoryHandcraftedToProductHandcrafted"("B");

-- AddForeignKey
ALTER TABLE "ProductHandcrafted" ADD CONSTRAINT "ProductHandcrafted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserHandcrafted"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewHandcrafted" ADD CONSTRAINT "ReviewHandcrafted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserHandcrafted"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewHandcrafted" ADD CONSTRAINT "ReviewHandcrafted_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductHandcrafted"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryHandcraftedToProductHandcrafted" ADD CONSTRAINT "_CategoryHandcraftedToProductHandcrafted_A_fkey" FOREIGN KEY ("A") REFERENCES "CategoryHandcrafted"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryHandcraftedToProductHandcrafted" ADD CONSTRAINT "_CategoryHandcraftedToProductHandcrafted_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductHandcrafted"("id") ON DELETE CASCADE ON UPDATE CASCADE;
