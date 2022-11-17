import { FormTokenSchema } from "../../../utils/form-type"
import sendgrid from "@sendgrid/mail"

import { router, publicProcedure } from "../trpc"
import { TRPCError } from "@trpc/server"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!)

export const publicRouter = router({
	sendMessage: publicProcedure
		.input(FormTokenSchema)
		.mutation(async ({ input }) => {
			const verifyScore = await fetch(
				`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${input.captchaToken}`,
				{
					method: "POST",
				}
			)
			const googleResponse = await verifyScore.json()

			if (!googleResponse.success || googleResponse.score < 0.5) {
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "An unexpected error occurred, please try again later.",
				})
			}

			const emailBody = `
				Nom: ${input.name}\r\n,
				Email: ${input.email}\r\n,
				Message: ${input.message},
			`

			const email = {
				to: "b.voissiere26@gmail.com",
				from: "benjamin.voissiere@hotmail.fr",
				subject: `Nouvelle prise de contact : ${input.object}`,
				text: input.message,
				html: emailBody.replace(/\r\n/g, "<br>"),
			}

			await sendgrid.send(email)
		}),
})
