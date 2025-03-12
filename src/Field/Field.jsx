import PropTypes from "prop-types";
import { checkWinner } from "../checkWinner";
import { FieldLayout } from "./FIeldLayout";

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
}) => {
	const handleCLick = (item, idx) => {
		if (item === "" && isGameEnded === false) {
			const newField = [...field];
			newField[idx] = currentPlayer;
			const isWinner = checkWinner(newField);
			if (isWinner) {
				setIsGameEnded(true);
			} else if (!isWinner && !newField.includes("")) {
				setIsDraw(true);
			} else {
				setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
			}
			setField(newField);
		}
	};

	return (
		<>
			<FieldLayout field={field} handleCLick={handleCLick} />
		</>
	);
};

Field.propTypes = {
	field: PropTypes.object,
	setField: PropTypes.object,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.string,
	handleCLick: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.bool,
};
