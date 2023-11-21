// Your server-side code (GET endpoint)
import prisma from "@/utilis/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => { // Added 'req' parameter
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1; // Parse the page parameter as an integer
  const POST_PER_PAGE = 2;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.error(err); // Use console.error for logging errors
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
