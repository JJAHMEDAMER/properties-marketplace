/*
  Warnings:

  - Added the required column `address` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactEmail` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfBathrooms` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfBedrooms` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Apartments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Apartments" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "buildYear" INTEGER,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "contactEmail" TEXT NOT NULL,
ADD COLUMN     "contactPhone" TEXT,
ADD COLUMN     "country" TEXT NOT NULL DEFAULT 'Egypt',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'EGP',
ADD COLUMN     "description" TEXT,
ADD COLUMN     "imageUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "numberOfBathrooms" INTEGER NOT NULL,
ADD COLUMN     "numberOfBedrooms" INTEGER NOT NULL,
ADD COLUMN     "squareFootage" INTEGER,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "zipCode" TEXT,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;
