import { Link } from "react-router-dom"

export default () => {
    return(
        <header>
            <h3>Esse é o cabeçalho</h3>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="./">Home</Link>
                        </li>
                        <li>
                            <Link to="./register">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="./dashbord">Dashbord</Link>
                        </li>
                    </ul>
                </nav>                
            </div>
        </header>
    )
}