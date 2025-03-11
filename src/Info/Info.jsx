import s from "../App.module.css";

export const Info = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<>
			<div style={{ marginTop: "20px", fontSize: "50px" }}>
				{isDraw === true
					? "Ничья"
					: isGameEnded === true
						? `Победа ${currentPlayer}`
						: `Ходит ${currentPlayer}`}
			</div>
		</>
	);
};
