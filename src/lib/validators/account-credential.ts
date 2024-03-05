import { z } from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "password must be at least 8 charecters long"})
})

export type tAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>