import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "minibiz",
	description:
		"facilitating financial management website created by oskarpodrucki",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<div className='flex flex-row justify-center items-center h-screen gap-10'>
						<Card className='flex flex-col justify-between items-center w-[15%] h-[95%] py-5'>
							{/* Góra: tytuł + menu */}
							<div className='flex flex-col items-center w-full gap-2'>
								<Card className='flex flex-row justify-center w-[90%] items-center p-5'>
									<h1 className='text-5xl text-green-700'>MiniBiz</h1>
									<ThemeToggle />
								</Card>
								<Separator className='my-2' />

								<Card className='flex flex-row justify-center h-[5%] w-[90%] items-center p-5'>
									<Link href='/'>home</Link>
								</Card>

								<Card className='flex flex-row justify-center h-[5%] w-[90%] items-center p-5'>
									<Link href='/dashboard'>dashboard</Link>
								</Card>
							</div>

							{/* Dół: separator + avatar */}
							<div className='flex flex-col items-center w-full gap-2 '>
								<Separator className='my-2' />
								<Card className='flex flex-row w-[90%] items-center p-5 gap-3'>
									<Avatar>
										<AvatarImage alt='@user' />
										<AvatarFallback>USR</AvatarFallback>
									</Avatar>
									<h1 className='ml-3 text-2xl text-green-700'>Username</h1>
								</Card>
							</div>
						</Card>

						<Card className='flex flex-col justify-center items-center w-[75%] h-[95%]'>
							{children}
						</Card>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
