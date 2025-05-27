import { Card } from "@/components/ui/card";
import RaportActivityBox from "@/components/RaportActivityBox";
import RaportOptions from "@/components/RaportOptions";
import RaportVisualizationBox from "@/components/RaportVisualizationBox";

export default function Raporty() {
	return (
		<Card className='flex flex-row justify-center items-center w-[97%] h-[100%]'>
			<RaportActivityBox />
			<div className='flex flex-col gap-5 w-[63%] h-full'>
				<RaportOptions />
				<RaportVisualizationBox />
			</div>
		</Card>
	);
}
