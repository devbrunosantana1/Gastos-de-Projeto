import { Link } from "react-router-dom"

export function Home() {
    return(
        <div>
            <h1>Pagina Inicial</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/company">Empresa</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                    <li><Link to="/newproject">Novo Projeto</Link></li>
                </ul>
            </nav>
        </div>
    )
}