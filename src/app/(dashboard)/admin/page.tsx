import Sidebar from "@/src/components/sideBarComponente";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
    const session = await getServerSession(authOptions);

    if (session?.user) {
        return (
            <>
                <Sidebar />
                <h2>Página admin ~ Bem-vindo(a) {session?.user.username}</h2>
            </>
        );
    }

    return (
        <div>
            <Sidebar />
            <h1>Dashboard</h1>
            <p>Por favor faça login para acessar o Dashboard do Administrador! </p>

        </div>
    );
}

export default page;