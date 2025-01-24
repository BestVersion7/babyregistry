import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    try {
        const data2 = await prisma.regalo.findMany({
            orderBy: {
                id: "asc",
            },
        });
        const data = JSON.parse(
            JSON.stringify(
                data2,
                (_, value) =>
                    typeof value === "bigint" ? value.toString() : value // return everything else unchanged
            )
        );
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { item, buyer, purchased } = await req.json();
        const data = await prisma.regalo.create({
            data: {
                item,
                buyer,
                purchased,
            },
        });
        return NextResponse.json("çreated", { status: 201 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const { buyer, purchased } = await req.json();
        const productId = req.nextUrl.searchParams.get("id");
        const data = await prisma.regalo.update({
            data: {
                buyer,
                purchased,
            },
            where: {
                id: Number(productId),
            },
        });
        return NextResponse.json("updated");
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}
