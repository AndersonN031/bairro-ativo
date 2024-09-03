import { db } from "@/src/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        return NextResponse.json({ products: [] })
    } catch (error) {
        return NextResponse.json({
            message: "Error ao buscar usuários."
        })
    }
}

// export async function POST(req: NextRequest) {
//     const { nome, email, senha_hash, papel_id } = await req.json();
//     try {
//         const user = await db.usuario.create({
//             data: {
//                 nome,
//                 email,
//                 senha_hash,
//                 papel_id,
//             }
//         });
//         return NextResponse.json({ message: "Usuário criado com sucesso!", user })

//     } catch (error) {
//         return NextResponse.json({
//             message: "Error creating user",
//             error,
//         }, {
//             status: 500,
//         });
//     }
// }