import s from "./App.module.css";
import { Field } from "./Field/Field";
import { Info } from "./Info/Info";
import { useState } from "react";

function App() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameended] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	const handleReplay = () => {
		setCurrentPlayer("X");
		setIsGameended(false);
		setIsDraw(false);
		setField(["", "", "", "", "", "", "", "", ""]);
	};

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
				/>
				<button
					onClick={handleReplay}
					style={{ marginTop: "20px", fontSize: "50px" }}
				>
					Начать заново
				</button>
			</div>
		</>
	);
}

export default App;
