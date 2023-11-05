import { useForm } from "react-hook-form"
import Input from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerForm.schema"

export default () => {
    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: zodResolver(registerFormSchema),
        })

    const submit = (e) => {
        console.log(e)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Name"
                type="text"                
                {...register("name")}
                error={errors.name}
            />
            <Input
                label="Seu e-mail"
                type="text"                
                {...register("email")}
                error={errors.email}
            />
            <Input
                label="Crie uma senha"
                type="password"                
                {...register("password")}
                error={errors.password}
            />


            <Input
                label="Confirme sua senha"
                type="password"                
                {...register("confirmPassword")}
                error={errors.confirmPassword}
            />
            <button type="submit">Criar conta</button>
        </form>
    )
}