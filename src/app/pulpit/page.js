import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FastActivity from "@/components/FastActivity";
import SummaryBox from "@/components/SummaryBox";
import TransactionsRatio from "@/components/TransactionsRatio";
import ActivitiBox from "@/components/ActivityBox";

export default function Pulpit() {
	return (
		<Card className='flex flex-col items-center w-[97%] h-[100%]'>
			<FastActivity />
			<div className='w-[95%] h-full flex flex-row'>
				<div className='flex flex-col gap-5 w-full h-full'>
					<SummaryBox />
					<TransactionsRatio />
				</div>
				<ActivitiBox />
			</div>
		</Card>
	);
}
