import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const WORKER_URL = "https://student-discount.fk4460467.workers.dev/api/users";
export async function POST(req: NextApiRequest | any, res: NextApiResponse) {
  try {
    const body = await req.json();
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) { 
      throw new Error("Failed to fetch from worker");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
