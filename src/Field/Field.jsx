import s from "../App.module.css";
let nextId = 0;

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	setIsDraw,
	isGameEnded,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];
	const handleCLick = (item, idx) => {
		const newField = Object.assign([], field);
		WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			
		});

		if (item === "" && isDraw === false && isGameEnded === false) {
			newField[idx] = currentPlayer;
			setField(newField);

			setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
		}
	};

	return (
		<>
			<div className={s.mainField}>
				<div className={s.field}>
					{field.map((item, index) => {
						return (
							<button
								onClick={() => {
									handleCLick(item, index);
								}}
								className={s.button}
								key={nextId++}
							>
								{item}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};
