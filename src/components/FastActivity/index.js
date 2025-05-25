import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { Rabbit, HandCoins } from "lucide-react";

export default function FastActivity() {
	return (
		<Card className='flex flex-col w-[95%] p-4'>
			<div className='flex items-center gap-2'>
				<Rabbit />
				<h1 className='text-lg font-semibold'>Szybka aktywność</h1>
			</div>

			<Separator />

			<Link href='/ksiegowosc' className='w-full'>
				<Button
					variant='outline'
					className='relative w-[20%] h-[50px] justify-center items-center cursor-pointer'>
					<HandCoins
						size={20}
						className='absolute left-4 top-1/2 -translate-y-1/2'
					/>
					<span>Dodaj transakcję</span>
				</Button>
			</Link>
		</Card>
	);
}
