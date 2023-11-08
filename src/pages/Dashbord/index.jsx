import { useContext } from "react"
import { DefaultTemplate } from "../../components"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext"


export default () => {
    const { user } = useContext(UserContext)

    return (
        <DefaultTemplate  >
            <main className={styles.dashContainer}>
                <div>
                    <div className={styles.dashBox} >
                        <p className="title one">Olá, {user?.name}</p>
                        <p className="title pdash">{user?.course_module}</p>
                        <p></p>
                    </div>
                    <div className={styles.app}>
                        <h1 className="title tdash">Que pena! Estamos em desenvolvimento</h1>
                        <p className="title tree">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </div>
            </main>
        </DefaultTemplate>

    )
}