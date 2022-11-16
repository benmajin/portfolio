import { FormTokenSchema } from "../../../utils/form-type"

import { router, publicProcedure } from "../trpc"
import { TRPCError } from "@trpc/server"

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
		}),
})
