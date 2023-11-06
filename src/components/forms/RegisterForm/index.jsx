import { useForm } from "react-hook-form"
import Input from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerForm.schema"
import { Link, useNavigate } from "react-router-dom"
import styles from "./style.module.scss"
import api from "../../../services"
import { useState } from "react"

export default () => {
    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: zodResolver(registerFormSchema),
        })

    const submit = (payLoad) => {
        userRegister(payLoad)
    }

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const userRegister = async (payLoad) => {
        try {
            setLoading(true)
            await api.post("/users", payLoad)
            navigate("/")
            alert("Cadastro feito com sucesso")
        } catch (error) {
            console.log(error)
            if(error.response?.data.message === "Email already exists"){
                alert("Usuario ja cadastrado")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(submit)}>
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
            <Input
                label="Bio"
                type="text"
                {...register("bio")}
                error={errors.bio}
            />
            <Input
                label="Contato"
                type="text"
                {...register("contact")}
                error={errors.contact}
            />
            <Input
                label="Selecionar Modulo"
                type="text"
                {...register("course_module")}
                error={errors.course_module}
            />
            <div>
                <button className="btn one" type="submit" disabled={loading}>Cadastrar</button>
            </div>
            <div>
                <Link to="/">Login</Link>
            </div>

        </form>
    )
}