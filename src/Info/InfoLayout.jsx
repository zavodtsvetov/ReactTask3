import PropTypes from "prop-types";
import s from "./Info.module.css";

export const InfoLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			<div className={s.status}>
				{isDraw === true ? (
					<div className={s.draw}>Ничья</div>
				) : isGameEnded === true ? (
					<div className={s.win}> Победил {currentPlayer}</div>
				) : (
					`Ходит ${currentPlayer}`
				)}
			</div>
		</>
	);
};

InfoLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
