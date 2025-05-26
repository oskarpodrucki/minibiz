import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, PencilRuler, Lightbulb } from "lucide-react";

export default function Home() {
	return (
		<Card className='w-[97%] h-full p-10 flex flex-col gap-20 text-center items-center justify-center'>
			<div className='flex flex-col justify-center items-center w-full'>
				<h1 className='text-4xl font-bold text-green-500 mb-2'>
					Witaj w MiniBiz!
				</h1>
				<p className='text-nowrap  text-lg max-w-2xl'>
					Twoje centrum zarządzania działalnością nierejestrowaną <br></br>–
					prosto, przejrzyście i skutecznie.
				</p>
			</div>
			<Separator className='my-[-40px]' />
			<div className='max-w-3xl text-left'>
				<div className='flex flex-row gap-2'>
					<Info size={30} color='#2b7fff' />
					<h2 className='text-2xl font-semibold mb-2 '>Czym jest MiniBiz?</h2>
				</div>

				<p>
					MiniBiz to nowoczesna aplikacja stworzona z myślą o osobach
					prowadzących działalność nierejestrowaną. Zarządzaj przychodami i
					wydatkami, twórz raporty oraz prowadź uproszczoną ewidencję – wszystko
					w jednym miejscu, lokalnie, u ciebie.
				</p>
			</div>
			<Separator className='my-[-40px]' />
			<div className='max-w-3xl text-left'>
				<div className='flex flex-row gap-2'>
					<PencilRuler size={30} color='#fb2c36' />
					<h2 className='text-2xl font-semibold mb-2'>Jak zacząć?</h2>
				</div>

				<ol className='list-decimal list-inside text-nowrap  space-y-1'>
					<li>
						Wejdź w zakładkę <strong>Księgowośc</strong>, aby dodać pierwszy
						przychód lub wydatek.
					</li>
					<li>
						Przeglądaj swoją działalność w estetycznym i przejrzystym
						interfejsie na stronie <strong>Pulpit</strong>.
					</li>
					<li>
						Odwiedź sekcję <strong>Raporty</strong>, aby stworzyć zestawienia
						okresowe.
					</li>
					<li>
						Zajrzyj do <strong>Powiadomień</strong>, by być na bieżąco z ważnymi
						terminami.
					</li>
				</ol>
			</div>
			<Separator className='my-[-30px]' />
			<div className='dark:bg-[#1f1f1f] dark:border-gray-700 p-6 rounded-xl border border-1 shadow-md max-w-3xl w-full text-left'>
				<div className='flex flex-row gap-2'>
					<Lightbulb size={25} color='#fdc700' />
					<h2 className='text-xl font-semibold mb-2 text-yellow-400'>
						Czy wiesz, że...?
					</h2>
				</div>

				<p>
					Działalność nierejestrowana nie wymaga rejestracji w CEIDG ani
					opłacania składek ZUS
					<em>
						{" "}
						(oprócz zdrowotnej, jeśli nie masz innego tytułu ubezpieczenia)
					</em>
					.
				</p>
			</div>
		</Card>
	);
}
