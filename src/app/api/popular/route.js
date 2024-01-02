import prisma from "@/utilis/connect";
import { NextResponse } from "next/server";

export  const GET = async (req) => {
  if (req.method !== "GET") {
    return new NextResponse(
      JSON.stringify({ message: "Method Not Allowed" }, { status: 405 })
    );
  }

  const { categoryName } = req.query;

  try {
    const category = await prisma.category.findUnique({
      where: { name: categoryName },
      select: {
        features: true,
      },
    });

    if (!category) {
      return new NextResponse(
        JSON.stringify({ message: "Category not found!" }, { status: 404 })
      );
    }

    return new NextResponse(JSON.stringify(category.features, { status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
