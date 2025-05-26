import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";
import { Bell } from "lucide-react";

export default function NotificationBox() {
	return (
		<Dialog>
			<DialogTrigger className='relative flex flex-row items-center justify-between w-[90%] h-[33px] px-4 border-1 rounded-2xl cursor-pointer'>
				<Bell size={20}/>
				<p className='absolute left-1/2 transform -translate-x-1/2'>
					Powiadomienia
				</p>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='text-3xl text-center'>
						Twoje powiadomienia
					</DialogTitle>
					<Separator className='' />
					<DialogDescription className='flex flex-col justify-center'>
						<span className=' text-red-500 text-center'>
							Brak nowych powiadomień
						</span>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
