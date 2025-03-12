import s from "./App.module.css";
import { Field } from "./Field/Field";
import { Info } from "./Info/Info";
import { useState } from "react";

function App() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	const handleReplay = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(["", "", "", "", "", "", "", "", ""]);
	};
	const startButton = (
		<button
			onClick={handleReplay}
			style={{
				marginTop: "20px",
				fontSize: "50px",
				border: null,
				background: "linear-gradient(skyBlue,blue)",
				color: "white",
			}}
		>
			Очистить поле
		</button>
	);

	return (
		<>
			<div className={s.main}>
				<Info
					currentPlayer={currentPlayer}
					isDraw={isDraw}
					isGameEnded={isGameEnded}
				/>
				<Field
					field={field}
					setField={setField}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
				/>

				{field.includes("X" || "O") ? startButton : ""}
			</div>
		</>
	);
}

export default App;
