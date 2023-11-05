import { Link } from "react-router-dom"
import Input from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./LoginForm.schema"

export default () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const submit = (e) => {
        console.log(e)
    }

    return (        
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Seu E-mail: " type="email" id="email" error={errors.email} {...register("email")} />
            <Input label="Sua Senha: " type="password" id="senha" error={errors.password} {...register("password")} />
            <div>
                <Link to="/register">Cadastre-se</Link>
                <button type="submit">Entrar</button>
            </div>
        </form>
    )
}