import { FormSchema } from "../../../utils/form-type"
import { z } from "zod"

import { router, publicProcedure } from "../trpc"

export const exampleRouter = router({
	hello: publicProcedure
		.input(z.object({ text: z.string().nullish() }).nullish())
		.query(({ input }) => ({
			greeting: `Hello ${input?.text ?? "world"}`,
		})),
	sendMessage: publicProcedure.input(FormSchema).mutation(({ input }) => ({})),
})
