type Props = {
    id: number;
    advice: string;
}
function Advice({id, advice}: Props) {
    
	return (
		<>
			<h2 className="text-neonGreen font-manrope tracking-widest font-bold text-sm">
				ADVICE #{id}
			</h2>

			<p className="text-lightCyan font-manrope text-lg sm:text-xl md:text-2xl font-bold">
				"{advice}"
			</p>
		</>
	);
}

export default Advice;
