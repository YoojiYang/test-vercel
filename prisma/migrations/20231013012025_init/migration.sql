-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "scheduledArrival" TIMESTAMP(3),
    "reserveAdultsCount" INTEGER NOT NULL DEFAULT 0,
    "reserveChildrenCount" INTEGER NOT NULL DEFAULT 0,
    "changedAdultsCount" INTEGER NOT NULL DEFAULT 0,
    "changedChildrenCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_name_key" ON "Room"("name");
