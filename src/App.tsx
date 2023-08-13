import desktopPatternDivider from "./assets/pattern-divider-desktop.svg";
import mobilePatternDivider from "./assets/pattern-divider-desktop.svg";
import iconDice from "./assets/icon-dice.svg";
import { useEffect, useState } from "react";
import Advice from "./components/Advice";
import { TailSpin } from "react-loader-spinner";
type Advice = {
	id: number;
	advice: string;
};

function App() {
	const [advice, setAdvice] = useState<null | Advice>(null);
	async function generateAdvice() {
		try {
			const res = await fetch("https://api.adviceslip.com/advice", {
				cache: "no-cache",
			});
			if (res.status !== 200)
				throw new Error(`HTTP Error! status: ${res.status}`);
			return await res.json();
		} catch (e) {
			console.log(e);
		}
	}

	async function handleClick() {
		const advice = await generateAdvice();
		setAdvice(advice.slip);
	}

	useEffect(() => {
		async function fetchAdvice() {
			const data = await generateAdvice();
			if (data) {
				setAdvice(data.slip);
			}
		}
		fetchAdvice();
	}, []);

	return (
		<main className="flex w-screen h-screen items-center justify-center bg-darkBlue">
			<section className="relative flex flex-col px-8  bg-darkGrayishBlue rounded-xl w-[90%] py-20 sm:max-w-[450px] sm:p-14 text-center gap-y-6 sm:gap-y-8 items-center">
				{advice ? (
					<Advice id={advice!.id} advice={advice!.advice} />
				) : (
					<TailSpin
						height="40"
						width="40"
						color="hsl(150,100%,66%)"
						ariaLabel="tail-spin-loading"
						radius="1"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				)}
				<picture>
					<source
						media="(min-width: 350px)"
						src={desktopPatternDivider}
					/>
					<img src={mobilePatternDivider} alt="pattern divider" />
				</picture>
				<button
					onClick={handleClick}
					className="absolute bg-neonGreen p-4 rounded-full bottom-0 translate-y-1/2 shadow-neonGreen hover:shadow-[0_0_30px_3px_hsl(150,100%,66%)]"
				>
					<img src={iconDice} className="" alt="dice" />
				</button>
			</section>
		</main>
	);
}

export default App;
