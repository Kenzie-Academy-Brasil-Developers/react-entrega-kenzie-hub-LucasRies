import { LoginForm } from "../../components"
import pageStyles from "../../styles/modules/pageBox.module.scss"
import styles from "./style.module.scss"
import hub from "../../assets/hub.svg"
import { Link } from "react-router-dom"


export default () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className={styles.header}>
                <img src={hub} alt="voltar" />
            </div>
            <div className="container sm">
                <div>
                    <div className={styles.box}>
                        <h1 className="title one">Login</h1>
                    </div>
                    <LoginForm />
                    <div className={styles.p}>
                        <p className="title p">Ainda não possui uma conta?</p>
                    </div>
                    <Link className={styles.link} to="/register">Cadastre-se</Link>
                </div>
            </div>
        </main>
    )
}