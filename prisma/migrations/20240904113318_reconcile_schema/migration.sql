/*
  Warnings:

  - You are about to drop the column `senha_hash` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "representante_id" INTEGER;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "senha_hash",
ADD COLUMN     "password" VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "representante_id" FOREIGN KEY ("representante_id") REFERENCES "Representante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
