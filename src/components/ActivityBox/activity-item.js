import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Eye } from "lucide-react";
import clsx from "clsx";

export default function ActivityItem({ type, date, amount, description }) {
	const isIncome = type === "income";
	const isExpense = type === "expense";

	const borderColor = clsx({
		"border-l-4 border-green-500": isIncome,
		"border-l-4 border-red-500": isExpense,
		"border-l-4 border-gray-400": !isIncome && !isExpense,
	});

	const textColor = clsx({
		"text-green-600": isIncome,
		"text-red-600": isExpense,
		"text-neutral-500": !isIncome && !isExpense,
	});

	return (
		<Card className={clsx("flex flex-col gap-1 mt-2 p-3", borderColor)}>
			<div className='flex flex-row justify-between items-center text-sm font-semibold text-muted-foreground mb-1'>
				<p>Typ</p>
				<p>Data</p>
				<p>Kwota</p>
				<p>Opis</p>
			</div>
			<Separator />
			<div className='flex flex-row justify-between items-center mt-2 text-sm'>
				<div className='flex items-center'>
					<p className={textColor}>{isIncome ? "Przychód" : "Wydatek"}</p>
				</div>
				<p>{date}</p>
				<p className='font-medium'>{amount}</p>
				<div>
					{!description ? (
						<p className='text-muted-foreground'>Brak</p>
					) : (
						<HoverCard>
							<HoverCardTrigger asChild>
								<Eye className='cursor-pointer mr-1 hover:text-gray-400' />
							</HoverCardTrigger>
							<HoverCardContent className='w-80 text-sm'>
								<p>{description}</p>
							</HoverCardContent>
						</HoverCard>
					)}
				</div>
			</div>
		</Card>
	);
}
