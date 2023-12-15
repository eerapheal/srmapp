import prisma from "@/utilis/connect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  if (req.method !== "GET") {
    return new NextResponse(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
    });
  }

  const categorySlug = req.query.category;

  try {
    // Fetch posts based on the category
    const posts = await prisma.post.findMany({
      where: {
        catSlug: categorySlug,
      },
      include: {
        cat: true,
        user: true,
        comments: true,
      },
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
