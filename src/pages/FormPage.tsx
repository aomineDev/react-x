import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	InputGroupTextarea,
} from '@/components/ui/input-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import Confetti from 'react-confetti-boom'
import { useState } from 'react'

const formSchema = z.object({
	title: z
		.string()
		.min(5, 'Title must be at least 5 characters long')
		.max(50, 'Title must be at most 50 characters long'),
	description: z
		.string()
		.min(20, 'Description must be at least 20 characters long')
		.max(100, 'Description must be at most 100 characters long'),
})

type FormData = z.infer<typeof formSchema>

const FormPage = () => {
	const [successSubmit, setSuccessSubmit] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
		},
	})

	function onSubmit(data: FormData) {
		console.log(data)
		setSuccessSubmit(true)
	}

	return (
		<>
			{successSubmit && (
				<>
					<Confetti
						mode="fall"
						colors={['#4e3aeb', '#45f282', '#ff8383', '#fff9b0']}
					/>
					<Confetti
						mode="boom"
						colors={['#4e3aeb', '#45f282', '#ff8383', '#fff9b0']}
					/>
				</>
			)}
			<div className="flex justify-center h-[calc(100vh-61px)] items-center">
				<Card className="w-full sm:w-md">
					<CardHeader>
						<CardTitle>Bug Report</CardTitle>
						<CardDescription>
							Help us imporve by reporting bugs you encounter.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={form.handleSubmit(onSubmit)} id="form">
							<FieldGroup>
								<Controller
									name="title"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="title">Bug Title</FieldLabel>
											<Input
												{...field}
												id="title"
												placeholder="Login button not working on mobile"
												aria-invalid={fieldState.invalid}
												autoComplete="off"
											/>
											{fieldState.error && (
												<FieldError>{fieldState.error.message}</FieldError>
											)}
										</Field>
									)}
								/>
								<Controller
									name="description"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="description">Description</FieldLabel>
											<InputGroup>
												<InputGroupTextarea
													{...field}
													id="description"
													placeholder="I'm having an issue with the login button"
													rows={6}
													className="min-h-24 resize-none"
													autoComplete="off"
													aria-invalid={fieldState.invalid}
												/>
												<InputGroupAddon align="block-end">
													<InputGroupText className="tabular-nums">
														{field.value.length}/100 characters
													</InputGroupText>
												</InputGroupAddon>
											</InputGroup>
											{fieldState.error && (
												<FieldError>{fieldState.error.message}</FieldError>
											)}
										</Field>
									)}
								/>
							</FieldGroup>
						</form>
					</CardContent>
					<CardFooter>
						{/* <Button
							type="button"
							variant="outline"
							onClick={() => form.reset()}
						>
							Reset
						</Button> */}
						<Button
							type="submit"
							form="form"
							className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50 cursor-pointer"
						>
							Submit
						</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	)
}

export default FormPage
