export default function Login() {
    return (
        <div className="container">
            <div className="card">
                <h1>Login</h1>
                <form action="/login" method="post">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}