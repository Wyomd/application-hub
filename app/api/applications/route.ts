import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Application Received:", body);

    return NextResponse.json({
      success: true,
      message: "Application stored successfully",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process application",
      },
      { status: 500 }
    );
  }
}
