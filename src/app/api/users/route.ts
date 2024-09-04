import { db } from "@/src/lib/schema.prisma"
import { NextRequest, NextResponse } from "next/server"
import { hash } from "bcrypt"


export async function GET(req: NextRequest) {
    try {
        const users = await db.usuario.findMany()
        return NextResponse.json({ users })
    } catch (error) {
        return NextResponse.json({
            message: "Error ao buscar usuários."
        })
    }
}


export async function POST(req: NextRequest) {
    const body = await req.json()
    const { nome, email, papel_id, password } = body
    try {

        const hashedPassword = await hash(password, 10)

        const newUser = await db.usuario.create({
            data: {
                nome,
                email,
                papel_id: 3,
                password: hashedPassword
            }
        });
        return NextResponse.json(
            { user: newUser, message: "Usuário criado com sucesso!" },
            { status: 201 }
        )

    } catch (error) {
        console.log("Error creating user:", error)
        return NextResponse.json({
            message: "Error creating user",
            error,
        }, {
            status: 500,
        });
    }
}