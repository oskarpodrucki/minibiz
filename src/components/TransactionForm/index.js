"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export default function TransactionForm() {
	const [transactionType, setTransactionType] = useState("income");
	const [date, setDate] = useState("");
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		// Walidacja kwoty
		const amountValue = Number.parseFloat(amount);
		if (!amount || amountValue <= 0) {
			setErrors({ amount: "Kwota musi być większa niż 0" });
			return;
		}

		setErrors({});

		// Obsługa przesłania formularza
		const formData = {
			type: transactionType,
			date,
			amount: amountValue,
			description: description.trim() || undefined,
		};

		console.log("Dodano transakcję:", formData);

		// Resetowanie formularza
		setTransactionType("income");
		setDate("");
		setAmount("");
		setDescription("");
	};

	return (
		<div className='flex items-center justify-center w-[444px] p-4'>
			<Card className='w-full max-w-md'>
				<CardHeader>
					<CardTitle>Dodaj transakcję</CardTitle>
					<CardDescription>
						Zarejestruj nowy przychód lub wydatek.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='space-y-3'>
							<Label className='text-sm font-medium'>Typ transakcji</Label>
							<RadioGroup
								value={transactionType}
								onValueChange={setTransactionType}
								className='flex gap-6'>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='income' id='income' />
									<Label
										htmlFor='income'
										className='text-sm font-normal cursor-pointer'>
										Przychód
									</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='expense' id='expense' />
									<Label
										htmlFor='expense'
										className='text-sm font-normal cursor-pointer'>
										Wydatek
									</Label>
								</div>
							</RadioGroup>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='date'>Data</Label>
							<Input
								id='date'
								type='date'
								value={date}
								onChange={(e) => setDate(e.target.value)}
								required
							/>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='amount'>Kwota (Wartość w PLN)</Label>
							<Input
								id='amount'
								type='number'
								step='0.01'
								min='0.01'
								placeholder='0.00'
								value={amount}
								onChange={(e) => {
									setAmount(e.target.value);
									if (errors.amount) {
										setErrors({});
									}
								}}
								className={errors.amount ? "border-red-500" : ""}
								required
							/>
							{errors.amount && (
								<p className='text-sm text-red-500'>{errors.amount}</p>
							)}
						</div>

						<div className='space-y-2'>
							<Label htmlFor='description'>Opis (opcjonalnie)</Label>
							<Textarea
								id='description'
								placeholder='Wprowadź opis transakcji...'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className='min-h-[80px]'
							/>
						</div>

						<Button type='submit' className='w-full cursor-pointer'>
							Dodaj transakcję
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
