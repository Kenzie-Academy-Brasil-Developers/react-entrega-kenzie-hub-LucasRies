import { Link } from "react-router-dom"
import styles from "./style.module.scss"

export default () => {
    return(
        <header>                
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