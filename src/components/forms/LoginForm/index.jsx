import Input from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./loginForm.schema"
import { useContext, useState } from "react"
import { UserContext } from "../../../providers/UserContext"

export default () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const { userLogin } = useContext(UserContext)

    const [loading, setLoading] = useState(false)    


    const submit = (payLoad) => {
        userLogin(payLoad, setLoading)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Seu E-mail: " type="email" id="email" error={errors.email} {...register("email")} />
            <Input label="Sua Senha: " type="password" id="senha" error={errors.password} {...register("password")} />
            <div>
                <button className="btn pink" type="submit" disabled={loading}>Entrar</button>
            </div>            
        </form>
    )
}