import { Link } from "react-router-dom"
import { RegisterForm } from "../../components"
import pageStyles from "../../styles/modules/pageBox.module.scss"
import hub from "../../assets/hub.svg"
import styles from "./style.module.scss"

export default () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className={styles.header}>
                <img src={hub} alt="voltar" />
                <Link className={styles.link} to="/">Voltar</Link>
            </div>
            <div className="container sm">
                <div>
                    <div className={styles.box}>
                        <h1 className="title one">Crie sua conta</h1>
                        <p className="title p">Rapido e grátis, vamos nessa</p>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </main>
    )
}