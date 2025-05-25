"use client";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ChartArea } from "lucide-react";

const originalData = [
	{ date: "2024-02-28", income: 849, expenses: 322 },
	{ date: "2024-02-29", income: 793, expenses: 309 },
	{ date: "2024-03-01", income: 981, expenses: 222 },
	{ date: "2024-03-02", income: 718, expenses: 176 },
	{ date: "2024-03-03", income: 409, expenses: 354 },
	{ date: "2024-03-04", income: 296, expenses: 352 },
	{ date: "2024-03-05", income: 831, expenses: 281 },
	{ date: "2024-03-06", income: 874, expenses: 186 },
	{ date: "2024-03-07", income: 929, expenses: 207 },
	{ date: "2024-03-08", income: 531, expenses: 377 },
	{ date: "2024-03-09", income: 729, expenses: 345 },
	{ date: "2024-03-10", income: 926, expenses: 438 },
	{ date: "2024-03-11", income: 849, expenses: 251 },
	{ date: "2024-03-12", income: 719, expenses: 429 },
	{ date: "2024-03-13", income: 687, expenses: 263 },
	{ date: "2024-03-14", income: 366, expenses: 429 },
	{ date: "2024-03-15", income: 504, expenses: 258 },
	{ date: "2024-03-16", income: 784, expenses: 282 },
	{ date: "2024-03-17", income: 939, expenses: 367 },
	{ date: "2024-03-18", income: 536, expenses: 395 },
	{ date: "2024-03-19", income: 552, expenses: 422 },
	{ date: "2024-03-20", income: 317, expenses: 416 },
	{ date: "2024-03-21", income: 990, expenses: 418 },
	{ date: "2024-03-22", income: 560, expenses: 264 },
	{ date: "2024-03-23", income: 902, expenses: 329 },
	{ date: "2024-03-24", income: 982, expenses: 472 },
	{ date: "2024-03-25", income: 660, expenses: 471 },
	{ date: "2024-03-26", income: 313, expenses: 205 },
	{ date: "2024-03-27", income: 569, expenses: 455 },
	{ date: "2024-03-28", income: 895, expenses: 234 },
	{ date: "2024-03-29", income: 618, expenses: 176 },
	{ date: "2024-03-30", income: 859, expenses: 320 },
	{ date: "2024-03-31", income: 743, expenses: 234 },
	{ date: "2024-04-01", income: 990, expenses: 165 },
	{ date: "2024-04-02", income: 864, expenses: 295 },
	{ date: "2024-04-03", income: 632, expenses: 468 },
	{ date: "2024-04-04", income: 994, expenses: 209 },
	{ date: "2024-04-05", income: 791, expenses: 171 },
	{ date: "2024-04-06", income: 466, expenses: 441 },
	{ date: "2024-04-07", income: 474, expenses: 231 },
	{ date: "2024-04-08", income: 413, expenses: 348 },
	{ date: "2024-04-09", income: 948, expenses: 479 },
	{ date: "2024-04-10", income: 356, expenses: 198 },
	{ date: "2024-04-11", income: 384, expenses: 418 },
	{ date: "2024-04-12", income: 936, expenses: 447 },
	{ date: "2024-04-13", income: 757, expenses: 449 },
	{ date: "2024-04-14", income: 996, expenses: 398 },
	{ date: "2024-04-15", income: 843, expenses: 316 },
	{ date: "2024-04-16", income: 884, expenses: 279 },
	{ date: "2024-04-17", income: 767, expenses: 355 },
	{ date: "2024-04-18", income: 648, expenses: 486 },
	{ date: "2024-04-19", income: 841, expenses: 168 },
	{ date: "2024-04-20", income: 946, expenses: 252 },
	{ date: "2024-04-21", income: 765, expenses: 365 },
	{ date: "2024-04-22", income: 761, expenses: 292 },
	{ date: "2024-04-23", income: 456, expenses: 382 },
	{ date: "2024-04-24", income: 985, expenses: 247 },
	{ date: "2024-04-25", income: 904, expenses: 405 },
	{ date: "2024-04-26", income: 710, expenses: 260 },
	{ date: "2024-04-27", income: 783, expenses: 167 },
	{ date: "2024-04-28", income: 757, expenses: 397 },
	{ date: "2024-04-29", income: 951, expenses: 492 },
	{ date: "2024-04-30", income: 411, expenses: 376 },
	{ date: "2024-05-01", income: 580, expenses: 417 },
	{ date: "2024-05-02", income: 862, expenses: 318 },
	{ date: "2024-05-03", income: 708, expenses: 294 },
	{ date: "2024-05-04", income: 545, expenses: 202 },
	{ date: "2024-05-05", income: 862, expenses: 326 },
	{ date: "2024-05-06", income: 729, expenses: 387 },
	{ date: "2024-05-07", income: 890, expenses: 255 },
	{ date: "2024-05-08", income: 601, expenses: 214 },
	{ date: "2024-05-09", income: 851, expenses: 308 },
	{ date: "2024-05-10", income: 900, expenses: 206 },
	{ date: "2024-05-11", income: 533, expenses: 321 },
	{ date: "2024-05-12", income: 983, expenses: 428 },
	{ date: "2024-05-13", income: 493, expenses: 329 },
	{ date: "2024-05-14", income: 615, expenses: 370 },
	{ date: "2024-05-15", income: 649, expenses: 303 },
	{ date: "2024-05-16", income: 312, expenses: 238 },
	{ date: "2024-05-17", income: 540, expenses: 456 },
	{ date: "2024-05-18", income: 901, expenses: 282 },
	{ date: "2024-05-19", income: 579, expenses: 404 },
	{ date: "2024-05-20", income: 922, expenses: 309 },
	{ date: "2024-05-21", income: 655, expenses: 441 },
	{ date: "2024-05-22", income: 924, expenses: 488 },
	{ date: "2024-05-23", income: 611, expenses: 253 },
	{ date: "2024-05-24", income: 486, expenses: 166 },
	{ date: "2024-05-25", income: 924, expenses: 397 },
	{ date: "2024-05-26", income: 748, expenses: 414 },
	{ date: "2024-05-27", income: 376, expenses: 379 },
	{ date: "2024-05-28", income: 502, expenses: 473 },
	{ date: "2024-05-29", income: 606, expenses: 403 },
	{ date: "2024-05-30", income: 809, expenses: 271 },
	{ date: "2024-05-31", income: 815, expenses: 237 },
	{ date: "2024-06-01", income: 828, expenses: 357 },
	{ date: "2024-06-02", income: 698, expenses: 278 },
	{ date: "2024-06-03", income: 905, expenses: 251 },
	{ date: "2024-06-04", income: 543, expenses: 368 },
	{ date: "2024-06-05", income: 903, expenses: 174 },
	{ date: "2024-06-06", income: 990, expenses: 493 },
	{ date: "2024-06-07", income: 315, expenses: 365 },
	{ date: "2024-06-08", income: 804, expenses: 479 },
	{ date: "2024-06-09", income: 558, expenses: 316 },
	{ date: "2024-06-10", income: 853, expenses: 419 },
	{ date: "2024-06-11", income: 439, expenses: 493 },
	{ date: "2024-06-12", income: 952, expenses: 353 },
	{ date: "2024-06-13", income: 379, expenses: 376 },
	{ date: "2024-06-14", income: 817, expenses: 275 },
	{ date: "2024-06-15", income: 977, expenses: 305 },
	{ date: "2024-06-16", income: 407, expenses: 367 },
	{ date: "2024-06-17", income: 838, expenses: 496 },
	{ date: "2024-06-18", income: 546, expenses: 185 },
	{ date: "2024-06-19", income: 933, expenses: 397 },
	{ date: "2024-06-20", income: 800, expenses: 450 },
	{ date: "2024-06-21", income: 650, expenses: 210 },
	{ date: "2024-06-22", income: 430, expenses: 270 },
	{ date: "2024-06-23", income: 1010, expenses: 530 },
	{ date: "2024-06-24", income: 312, expenses: 180 },
	{ date: "2024-06-25", income: 344, expenses: 190 },
	{ date: "2024-06-26", income: 720, expenses: 380 },
	{ date: "2024-06-27", income: 820, expenses: 490 },
	{ date: "2024-06-28", income: 510, expenses: 200 },
	{ date: "2024-06-29", income: 280, expenses: 160 },
	{ date: "2024-06-30", income: 850, expenses: 400 },
];

const chartData = originalData.map((item) => ({
	...item,
	difference: item.income - item.expenses,
}));

const chartConfig = {
	income: {
		label: "Przychód",
		color: "#00c950",
	},
	expenses: {
		label: "Wydatek",
		color: "#fb2c36",
	},
	difference: {
		label: "Różnica",
		color: "#2b7fff",
	},
};

export default function TransactionsRatio() {
	const [timeRange, setTimeRange] = useState("90d");

	const filteredData = chartData.filter((item) => {
		const date = new Date(item.date);
		const referenceDate = new Date("2024-06-30");
		let daysToSubtract = 90;
		if (timeRange === "30d") {
			daysToSubtract = 30;
		} else if (timeRange === "7d") {
			daysToSubtract = 7;
		}
		const startDate = new Date(referenceDate);
		startDate.setDate(startDate.getDate() - daysToSubtract);
		return date >= startDate;
	});

	return (
		<Card className='flex flex-col w-[95%] h-[70%] p-4'>
			<CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
				<div className='grid flex-1 gap-1 text-center sm:text-left'>
					<CardTitle className='flex flex-row'>
						<ChartArea />
						<span className='text-lg font-semibold ml-1'>
							Wykres stosunku transakcji
						</span>
					</CardTitle>
					<CardDescription>
						<span className='text-green-500 font-normal'>przychód</span>-
						<span className='text-red-500 font-normal'>wydatek</span>-
						<span className='text-blue-500 font-normal'>różnica</span>
					</CardDescription>
				</div>
				<Select value={timeRange} onValueChange={setTimeRange}>
					<SelectTrigger className='w-[180px] rounded-lg sm:ml-auto'>
						<SelectValue placeholder='Zakres czasowy' />
					</SelectTrigger>
					<SelectContent className='rounded-xl'>
						<SelectItem value='90d'>Ostatnie 3 miesiące</SelectItem>
						<SelectItem value='30d'>Ostatnie 30 dni</SelectItem>
						<SelectItem value='7d'>Ostatnie 7 dni</SelectItem>
					</SelectContent>
				</Select>
			</CardHeader>

			<CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
				<ChartContainer
					config={chartConfig}
					className='aspect-auto h-[250px] w-full'>
					<AreaChart data={filteredData}>
						<defs>
							<linearGradient id='fillIncome' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='green' stopOpacity={0.8} />
								<stop offset='95%' stopColor='green' stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id='fillExpenses' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='red' stopOpacity={0.8} />
								<stop offset='95%' stopColor='red' stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id='fillDifference' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='blue' stopOpacity={0.8} />
								<stop offset='95%' stopColor='blue' stopOpacity={0.1} />
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("pl-PL", {
									month: "short",
									day: "numeric",
								});
							}}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("pl-PL", {
											month: "short",
											day: "numeric",
										});
									}}
									indicator='dot'
								/>
							}
						/>
						<Area
							dataKey='income'
							type='monotone'
							fill='url(#fillIncome)'
							stroke='green'
						/>
						<Area
							dataKey='expenses'
							type='monotone'
							fill='url(#fillExpenses)'
							stroke='red'
						/>
						<Area
							dataKey='difference'
							type='monotone'
							fill='url(#fillDifference)'
							stroke='blue'
						/>
						<ChartLegend content={<ChartLegendContent />} />
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
