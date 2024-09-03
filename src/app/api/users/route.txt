import prisma from "@/src/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const usuarios = await prisma.usuario.findMany();
    return Response.json(usuarios)
}

export async function POST(req: Request) {
    const { nome, email, senha_hash, papel_id } = await req.json();
    try {
        const user = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha_hash,
                papel_id,
            }
        });
        return Response.json({ message: "Ok", user })

    } catch (error) {
        return NextResponse.json({
            message: "Error", error
        },
            {
                status: 500,
            }
        )
    }
}