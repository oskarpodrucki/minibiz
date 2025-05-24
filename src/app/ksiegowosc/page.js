import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TransactionForm from "@/components/TransactionForm";

export default function Ksiegowosc() {
	return (
		<Card className='flex flex-col justify-center items-center w-[97%] h-[100%]'>
			<h1>This is księgowość page</h1>
			<Separator />
			<TransactionForm />
		</Card>
	);
}
