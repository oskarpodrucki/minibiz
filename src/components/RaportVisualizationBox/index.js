import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { TextSearch, Download } from "lucide-react";
import Link from "next/link";

export default function RaportVisualizationBox() {
	return (
		<Card className='flex flex-col w-full h-[80%] p-4 rounded-none'>
			<div className='flex items-center gap-2'>
				<TextSearch />
				<h1 className='text-lg font-semibold'>Wizualizacja raportu</h1>
			</div>
			<Separator />
			<div className='w-full h-[73%]'>raport visualization</div>
			<Separator />
			<Button
				variant='outline'
				className='relative w-[25%] h-[50px] justify-center items-center cursor-pointer'>
				<Download
					size={20}
					className='absolute left-4 top-1/2 -translate-y-1/2'
				/>
				<span>Pobierz raport</span>
			</Button>
		</Card>
	);
}
