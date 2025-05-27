import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { FileCog, Info, FileText } from "lucide-react";
import Link from "next/link";

export default function Raport() {
	return (
		<Card className='flex flex-col w-full p-4 rounded-none'>
			<div className='flex items-center gap-2'>
				<FileCog />
				<h1 className='text-lg font-semibold'>Opcje raportu</h1>
			</div>
			<Separator />
			<div>
				<Button
					variant='outline'
					className='relative w-[30%] h-[50px] justify-center items-center cursor-pointer'>
					<Info
						size={20}
						className='absolute left-4 top-1/2 -translate-y-1/2'
					/>
					<span className='text-center'>Jak stworzyć raport?</span>
				</Button>

				<Button
					variant='outline'
					className='relative w-[25%] h-[50px] justify-center items-center cursor-pointer ml-3'>
					<FileText
						size={20}
						className='absolute left-4 top-1/2 -translate-y-1/2'
					/>
					<span>Wybierz format</span>
				</Button>

				<Button
					variant='outline'
					className='relative w-[25%] h-[50px] justify-center items-center cursor-pointer ml-3'>
					<FileText
						size={20}
						className='absolute left-4 top-1/2 -translate-y-1/2'
					/>
					<span>Podejrzyj strukturę</span>
				</Button>
			</div>
		</Card>
	);
}
