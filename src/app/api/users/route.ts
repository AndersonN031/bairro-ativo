import prisma from "@/src/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        const usuarios = await prisma.usuario.findMany();
        return NextResponse.json(usuarios)
    } catch (error) {
        return NextResponse.json({
            message: "Error ao buscar usuários."
        })
    }
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
        return NextResponse.json({ message: "Usuário criado com sucesso!", user })

    } catch (error) {
        return NextResponse.json({
            message: "Error creating user",
            error,
        }, {
            status: 500,
        });
    }
}