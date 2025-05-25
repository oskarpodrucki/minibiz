import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import clsx from "clsx";

export default function ActivityItem({ type, date, amount, description }) {
	const color =
		type === "income"
			? "text-green-700"
			: type === "expense"
			? "text-red-700"
			: "text-neutral-700";

	return (
		<Card className='flex flex-col gap-1 mt-1'>
			<div className='flex flex-row justify-between items-center w-full'>
				<p className='font-medium ml-2'>Rodzaj</p>
				<p className='font-medium'>Data</p>
				<p className='font-medium'>Kwota</p>
				<p className='font-medium mr-2'>Opis</p>
			</div>
			<Separator />
			<div className={clsx("flex flex-row justify-between w-full", color)}>
				<p className='ml-2'>{type === "income" ? "Przychód" : "Wydatek"}</p>
				<p>{date}</p>
				<p>{amount}</p>
				{!description ? (
					<p className='mr-2'>Brak</p>
				) : (
					<HoverCard>
						<HoverCardTrigger asChild>
							<p className='underline mr-2 cursor-pointer'>Zobacz</p>
						</HoverCardTrigger>
						<HoverCardContent className='w-80'>
							<p>{description}</p>
						</HoverCardContent>
					</HoverCard>
				)}
			</div>
		</Card>
	);
}
