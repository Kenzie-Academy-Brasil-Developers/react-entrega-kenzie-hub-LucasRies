import { Link, useNavigate } from "react-router-dom"
import Input from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./LoginForm.schema"
import api from "../../../services"
import { useState } from "react"

export default () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const userLogin = async (payLoad) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", payLoad)
            localStorage.setItem("@TOKEN", data.token)
            navigate("/dashbord")
        } catch (error) {
            console.log(error)
            if (error.response?.data.message === "Incorrect email / password combination") {
                alert("E-mail ou Senha Incorretos")
            }
        } finally {
            setLoading(false)
        }
    }

    const submit = (payLoad) => {
        userLogin(payLoad)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Seu E-mail: " type="email" id="email" error={errors.email} {...register("email")} />
            <Input label="Sua Senha: " type="password" id="senha" error={errors.password} {...register("password")} />
            <div>
                <button className="btn pink" type="submit" disabled={loading}>Entrar</button>
            </div>
            <div>
                <Link to="/register">Cadastre-se</Link>
            </div>
        </form>
    )
}