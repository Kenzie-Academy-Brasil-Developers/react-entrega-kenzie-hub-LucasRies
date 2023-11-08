import styles from "./style.module.scss"
import hub from "../../assets/hub.svg"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export default () => {
    const { userLogout } = useContext(UserContext)

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