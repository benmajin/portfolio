import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema, TForm } from "../utils/form-type"
import ErrorMessage from "./ErrorMessage"
import clsx from "clsx"
import { trpc } from "../utils/trpc"

const ContactForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TForm>({ resolver: zodResolver(FormSchema) })

	const { data } = trpc.example.hello.useQuery()
	console.log(data?.greeting)

	const handleSubmitContact: SubmitHandler<TForm> = (data) => {
		console.log(data)
	}

	return (
		<form
			className="w-full max-w-screen-sm"
			onSubmit={handleSubmit(handleSubmitContact)}>
			<div className="mb-4 w-full">
				<label
					htmlFor="name"
					className="mb-2 block text-sm font-medium text-mainWhite">
					Votre nom et prénom
				</label>
				<input
					type="text"
					id="name"
					className={clsx(
						"block w-full rounded-lg bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70",
						errors.name && "outline-none outline-mainRed"
					)}
					placeholder="Antoine Dupont"
					{...register("name")}
				/>
				{errors.name?.message && <ErrorMessage message={errors.name.message} />}
			</div>
			<div className="mb-4 w-full">
				<label
					htmlFor="email"
					className="mb-2 block text-sm font-medium text-mainWhite">
					Votre email
				</label>
				<input
					type="email"
					id="email"
					className={clsx(
						"block w-full rounded-lg bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70",
						errors.email && "outline-none outline-mainRed"
					)}
					placeholder="johndoe@gmail.com"
					{...register("email")}
				/>
				{errors.email?.message && <ErrorMessage message={errors.email.message} />}
			</div>
			<div className="mb-4 w-1/2">
				<label
					htmlFor="object"
					className="mb-2 block text-sm font-medium text-mainWhite">
					Objet
				</label>
				<input
					type="text"
					id="object"
					className={clsx(
						"block w-full rounded-lg bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70",
						errors.object && "outline-none outline-mainRed"
					)}
					placeholder="Objet..."
					{...register("object")}
				/>
				{errors.object?.message && <ErrorMessage message={errors.object.message} />}
			</div>
			<div className="mb-4">
				<label
					htmlFor="message"
					className="mb-2 block text-sm font-medium text-mainWhite">
					Message
				</label>
				<textarea
					id="message"
					className={clsx(
						"block w-full rounded-lg bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70",
						errors.message && "outline-none outline-mainRed"
					)}
					placeholder=""
					{...register("message")}
				/>
				{errors.message?.message && (
					<ErrorMessage message={errors.message.message} />
				)}
			</div>
			<button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-mainRed px-5 py-3 font-bold transition-all hover:bg-white disabled:cursor-not-allowed disabled:bg-gray-700">
				<span className="absolute inset-0 rounded-full border-0 border-mainWhite transition-all duration-100 ease-linear group-hover:border-[25px] group-disabled:border-0"></span>
				<span className="relative w-full text-left text-mainWhite transition-colors duration-200 ease-in-out group-hover:text-mainRed group-disabled:text-mainWhite">
					Button Text
				</span>
			</button>
		</form>
	)
}

export default ContactForm
