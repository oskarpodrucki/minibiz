"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import ActivityItem from "./activity-item";
import { ChartNoAxesGantt } from "lucide-react";

export default function ActivitiBox() {
	const [transactionType, setTransactionType] = useState("time");

	return (
		<Card className='flex flex-col w-[40%] h-[100%] p-4'>
			<div className='flex flex-row'>
				<ChartNoAxesGantt />
				<h1 className='text-lg font-semibold ml-1'>Twoja ostatnia aktywność</h1>
			</div>

			<Separator />

			<div className='space-y-3'>
				<Label className='text-sm font-medium'>
					Sortuj aktywności (transakcje)
				</Label>
				<RadioGroup
					value={transactionType}
					onValueChange={setTransactionType}
					className='flex gap-6'>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='time' id='time' className='cursor-pointer' />
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
						<Label
							htmlFor='income'
							className='text-sm font-normal cursor-pointer'>
							Przychód
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem
							value='expense'
							id='expense'
							className='cursor-pointer'
						/>
						<Label
							htmlFor='expense'
							className='text-sm font-normal cursor-pointer'>
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
