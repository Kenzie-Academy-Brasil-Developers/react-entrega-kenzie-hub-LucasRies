import { useForm } from "react-hook-form"
import Input from "../Input"

export default () => {
    const { register, handleSubmit } = useForm()

    const submit = (e) => {        
        console.log(e)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Name" 
            placeholder="Digite seu nome" 
            type="text" 
            id="name" 
            required 
            {...register("name")} />
            <div>
                <label htmlFor="email">Seu e-mail</label>
                <input type="email" {...register("email")}/>
            </div>
            <div>
                <label htmlFor="password">Crie uma senha</label>
                <input type="password" {...register("password")} />
            </div>
            <button type="submit">Criar conta</button>
        </form>
    )
}