import { z } from "zod"

const registerFormSchema = z.object({
    name: z.string()
    .min(1, "O nome é obrigatorio"),
    email: z.string()
    .email()
    .min(1, "O e-mail é obrigatorio"),
    password: z.string()
    .min(8, "Minímo de 8 caracteres")
    .regex(/[a-z]+/, "É necessario conter letras")
    .regex(/[0-9]+/, "É necessario conter números"),
})