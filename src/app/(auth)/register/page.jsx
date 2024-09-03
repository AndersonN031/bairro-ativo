export default function register() {
    return (
        <div className="container">
            <div className="card">
                <h1>Registro de Usuário</h1>
                <form action="/register" method="post">
                    <label htmlFor="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />

                    <button type="submit">Registrar</button>
                </form>
            </div>
        </div>
    )
}