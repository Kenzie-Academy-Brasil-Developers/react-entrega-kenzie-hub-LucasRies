import { useForm } from "react-hook-form"
import Input from "../Input"
import Select from "../Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerForm.schema"
import styles from "./style.module.scss"
import { useContext, useState } from "react"
import { UserContext } from "../../../providers/UserContext"


export default () => {

    const { userRegister } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: zodResolver(registerFormSchema),
        })

    const submit = (payLoad) => {
        userRegister(payLoad, setLoading)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(submit)}>
            <Input                               
                label="Name"
                id="Name"
                type="text"
                {...register("name")}
                error={errors.name}
            />
            <Input                
                label="Seu e-mail"
                id="Seu e-mail"
                type="text"
                {...register("email")}
                error={errors.email}
            />
            <Input                
                label="Crie uma senha"
                id="Crie uma senha"
                type="password"
                {...register("password")}
                error={errors.password}
            />
            <Input                
                label="Confirme sua senha"
                id="Confirme sua senha"
                type="password"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
            />
            <Input                
                label="Bio"
                id="Bio"
                type="text"
                {...register("bio")}
                error={errors.bio}
            />
            <Input                
                label="Contato"
                id="Contato"
                type="text"
                {...register("contact")}
                error={errors.contact}
            />
            <Select                
                label="Selecionar Modulo"
                id="Selecionar Modulo"                
                {...register("course_module")}
                error={errors.course_module}
            />
            <div>
                <button className="btn one" type="submit" disabled={loading}>Cadastrar</button>
            </div>
        </form>
    )
}