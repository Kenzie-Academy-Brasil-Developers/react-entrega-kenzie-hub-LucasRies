import { RegisterForm } from "../../components"
import pageStyles from "../../styles/modules/pageBox.module.scss"

export default () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className="">
                    <h1 className="title one">Crie sua conta</h1>
                    <p className="title p">Rapido e grátis, vamos nessa</p>
                    <RegisterForm />
                </div>
            </div>
        </main>
    )
}