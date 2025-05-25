"use client";
import { useState } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import ActivityItem from "./activity-item";
import {
	ChartNoAxesGantt,
	Clock,
	BanknoteArrowUp,
	BanknoteArrowDown,
} from "lucide-react";

export default function ActivitiBox() {
	const [transactionType, setTransactionType] = useState("time");

	return (
		<Card className='flex flex-col w-[40%] h-[100%] p-4'>
			<div className='flex flex-row'>
				<ChartNoAxesGantt />
				<h1 className='text-lg font-semibold ml-1'>Ostatnie transakcje</h1>
			</div>
			<Separator />
			<div className='space-y-3'>
				<Label className='text-sm font-medium'>Sortuj transakcje</Label>
				<RadioGroup
					value={transactionType}
					onValueChange={setTransactionType}
					className='flex gap-6'>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='time' id='time' className='cursor-pointer' />
						<Clock />
						<Label
							htmlFor='time'
							className='text-sm font-normal cursor-pointer'>
							Czas
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem
							value='income'
							id='income'
							className='cursor-pointer'
						/>
						<BanknoteArrowUp color='#00bb33' />
						<Label
							htmlFor='income'
							className='text-sm text-green-500 font-normal cursor-pointer'>
							Przychód
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem
							value='expense'
							id='expense'
							className='cursor-pointer'
						/>
						<BanknoteArrowDown color='#aa1e21' />
						<Label
							htmlFor='expense'
							className='text-sm text-red-500 font-normal cursor-pointer'>
							Wydatek
						</Label>
					</div>
				</RadioGroup>
			</div>
			<Separator />
			<ScrollArea className='flex flex-col p-2 w-full h-[400px]'>
				<ActivityItem
					type='income'
					date='01.01.2025'
					amount='100.00 PLN'
					description='Sprzedzaż zestawu 1'
				/>
				<ActivityItem
					type='expense'
					date='02.01.2025'
					amount='50.00 PLN'
					description=''
				/>
				<ActivityItem
					type='income'
					date='01.01.2025'
					amount='100.00 PLN'
					description='Sprzedzaż zestawu 1'
				/>
				<ActivityItem
					type='expense'
					date='02.01.2025'
					amount='50.00 PLN'
					description=''
				/>
				<ActivityItem
					type='income'
					date='01.01.2025'
					amount='100.00 PLN'
					description='Sprzedzaż zestawu 1'
				/>
				<ActivityItem
					type='expense'
					date='02.01.2025'
					amount='50.00 PLN'
					description=''
				/>
			</ScrollArea>
		</Card>
	);
}
