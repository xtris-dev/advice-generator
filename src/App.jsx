// Imagees
import DividerDesktop from "../img/pattern-divider-desktop.svg";
import DividerMobile from "../img/pattern-divider-mobile.svg";
import Dice from "../img/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
	const [adviceId, setAdviceId] = useState(null);
	const [adviceText, setAdviceText] = useState("");

	async function fetchAdvice() {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json().then((data) => {
			setAdviceId(data.slip.id);
			setAdviceText(data.slip.advice);
		});
	}

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#1b1c20] px-4">
			<div className="bg-[#2d3541] max-w-[530px] flex flex-col items-center justify-center p-14 rounded-2xl relative">
				<p className="text-[#52ffa8] mb-8 tracking-[0.2rem] text-sm">
					ADVICE #{adviceId}
				</p>
				<h2 className="text-[#cee3e9] text-2xl text-center mb-8">
					{adviceText}
				</h2>
				<img src={DividerDesktop} alt="divider" className="mb-3" />
				<div
					className="absolute -bottom-7 bg-[#52ffa8] p-4 rounded-full cursor-pointer mx-auto"
					onClick={fetchAdvice}
				>
					<img src={Dice} alt="Dice" />
				</div>
			</div>
		</div>
	);
}

export default App;
