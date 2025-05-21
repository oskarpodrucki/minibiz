import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Card } from "@/components/ui/card";

export default function Home() {
	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<Card className='flex flex-row justify-center items-center p-5'>
				<h1 className='text-5xl text-green-700'>MiniBiz</h1>
				<ThemeToggle />
			</Card>
		</div>
	);
}
