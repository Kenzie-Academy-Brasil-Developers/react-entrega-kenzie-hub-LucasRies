import { z } from "zod"

const loginFormSchema = z
    .object({
        email: z.string().min(1, "O E-mail é Obrigatório"),
        password: z.string().min(1, "A Senha é Obrigatória"),        
})

export { loginFormSchema }