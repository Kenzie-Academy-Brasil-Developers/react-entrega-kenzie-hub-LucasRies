import { LoginForm } from "../../components"
import pageStyles from "../../styles/modules/pageBox.module.scss"

export default () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className="">
                    <h1 className="">LOGIN</h1>
                    <LoginForm />
                </div>
            </div>
        </main>
    )
}