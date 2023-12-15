import prisma from "@/utilis/connect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const popularPosts = await prisma.post.findMany({
      orderBy: { views: "desc" },
      take: 5, // Change this number based on how many popular posts you want to retrieve
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(popularPosts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};
