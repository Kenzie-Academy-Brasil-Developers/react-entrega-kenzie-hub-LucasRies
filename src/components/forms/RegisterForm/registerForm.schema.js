import { z } from "zod"

const registerFormSchema = z
    .object({
        name: z.string()
            .min(1, "O nome é obrigatorio")
            .regex(/[A-Z]+/, "É necessario conter letras Maiusculas"),
        email: z.string()
            .email("O e-mail é obrigatorio")
            .min(1, "O e-mail é obrigatorio"),
        password: z.string()
            .min(8, "Minímo de 8 caracteres")
            .regex(/[a-z]+/, "É necessario conter letras")
            .regex(/[0-9]+/, "É necessario conter números"),
        confirmPassword: z.string()
            .min(1, "Confirmação Obrigatória"),
        bio: z.string()
            .min(1, "Bio Obrigatória"),
        contact: z.string()
            .min(1, "Contato Obrigatório"),
        course_module: z.string()
            .min(1, "Modulo do Curso Obrigatório"),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"]
    })

export { registerFormSchema }