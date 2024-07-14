import { dbUrl } from "@/utils/dburl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(`${dbUrl}/data3`);
    const data = await res.json();
    return NextResponse.json({
      success: true,
      message: "data retreived",
      data: data,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: (err as Error).message,
    });
  }
}
