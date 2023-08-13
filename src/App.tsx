import desktopPatternDivider from "./assets/pattern-divider-desktop.svg";
import mobilePatternDivider from "./assets/pattern-divider-desktop.svg";
import iconDice from "./assets/icon-dice.svg";
function App() {
	return (
		<main className="flex w-screen h-screen items-center justify-center bg-darkBlue">
			<section className="relative flex flex-col px-8  bg-darkGrayishBlue rounded-xl w-[90%] py-20 md:max-w-[450px] md:p-14 text-center gap-y-6 md:gap-y-8 items-center">
				<h2 className="text-neonGreen font-manrope tracking-widest font-bold text-sm">
					ADVICE #117
				</h2>

				<p className="text-lightCyan font-manrope text-2xl">
					"It is easy to sit up and take notice, what's difficult is
					getting up and taking action"
				</p>

				<img src={desktopPatternDivider} alt="pattern divider" />

				<button className="absolute bg-neonGreen p-4 rounded-full bottom-0 translate-y-1/2">
					<img src={iconDice} className="" alt="dice" />
				</button>
			</section>
		</main>
	);
}

export default App;
