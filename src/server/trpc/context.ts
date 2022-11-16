import { type inferAsyncReturnType } from "@trpc/server"
// import { type CreateNextContextOptions } from "@trpc/server/adapters/next"

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
// type CreateContextOptions = Record<string, never>

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/

// export const createContextInner = async (opts: CreateContextOptions) => {
// 	return {}
// }

export const createContextInner = async () => ({})

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async () => {
	const ctx = await createContextInner()
	return ctx
}

export type Context = inferAsyncReturnType<typeof createContext>
