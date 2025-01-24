import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
    try {
        await prisma.regalo.updateMany({
            data: {
                purchased: false,
            },
        });
        return NextResponse.json("çreated", { status: 201 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}
