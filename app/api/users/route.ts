import { NextResponse } from "next/server";
import pool from "../../config/database";

export async function GET() {
    const client = await pool.connect();
    const user = await client.query(`
    SELECT 
        tickets.id AS ticket_id,
        tickets.titulo AS titulo_do_ticket,
        tickets.descricao AS descricao_do_ticket,
        tickets.categoria AS categoria_do_ticket,
        tickets.localizacao AS localizacao_do_ticket,
        tickets.status AS status_do_ticket,
        tickets.data_criacao AS data_criacao_do_ticket,
        
        usuarios.nome AS nome_do_usuario,
        usuarios_2.nome AS nome_representante,
        usuarios.email AS email_do_usuario,
        
        representantes.bairro AS bairro_representado,
        representantes.data_inicio AS data_inicio_representante,
        representantes.data_fim AS data_fim_representante

    FROM 
        tickets
    JOIN 
        usuarios ON tickets.usuario_id = usuarios.id
    JOIN 
        representantes ON tickets.representante_id = representantes.id
    JOIN 
        usuarios AS usuarios_2 ON representantes.usuario_id = usuarios_2.id;
    `)
    return NextResponse.json({ user: user.rows })
}