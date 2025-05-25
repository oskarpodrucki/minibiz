import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { FileCheck } from "lucide-react";

export default function SummaryBox() {
	return (
		<Card className='flex flex-col w-[95%] h-[30%] p-4'>
			<div className='flex flex-row'>
				<FileCheck />
				<h1 className='text-lg font-semibold ml-1'>
					Miesięczne podsumowanie działalności
				</h1>
			</div>
			<Separator />
			<div className='flex flex-col gap-2'>
				<div className='flex flex-row justify-between items-center w-full'>
					<p className='font-medium'>Limit miesięczny</p>
					<p className='font-medium'>Suma przychodów</p>
					<p className='font-medium'>Pozostało do limitu</p>
				</div>
				<Separator />
				<div className='flex flex-row justify-between w-full text-green-500'>
					<p>3 499,50 PLN</p>
					<p>0,00 PLN</p>
					<p>3 499,50 PLN</p>
				</div>
			</div>
		</Card>
	);
}
