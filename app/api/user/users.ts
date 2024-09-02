import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../config/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await pool.connect();

    try {
        const user = await client.query(`SELECT * FROM usuarios;`)
        return res.status(200).json({ user })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Erro intero do servidor!' })
    }
}
