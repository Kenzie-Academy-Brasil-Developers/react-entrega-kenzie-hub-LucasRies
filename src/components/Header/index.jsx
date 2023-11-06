import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import hub from "../../assets/hub.svg"

export default ({ userLogout }) => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={hub} alt="" />
                    <button className="out" onClick={()=> userLogout()}>Sair</button>
                </div>                
            </div>
        </header>
    )
}