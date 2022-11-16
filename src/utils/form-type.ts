import { z } from "zod"

export const FormSchema = z.object({
	name: z.string().min(1, "Le nom est obligatoire"),
	email: z
		.string()
		.min(1, { message: "L'email est obligatoire" })
		.email({ message: "L'email n'est pas valide" }),
	object: z
		.string()
		.min(5, { message: "L'objet doit faire au moins 5 caractères" }),
	message: z.string().min(20, { message: "Le message est trop court." }),
})

export type TForm = z.infer<typeof FormSchema>

const token = z.object({ captchaToken: z.string().min(1) })

export const FormTokenSchema = FormSchema.merge(token)
