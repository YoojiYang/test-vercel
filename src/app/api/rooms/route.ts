import { NextRequest, NextResponse } from "next/server";
import { genericGET } from "../utils/utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 全部屋の情報の取得
export const GET = (req: NextRequest, res: NextResponse) => {
  return genericGET(req, res, () => prisma.room.findMany(), "rooms");
}