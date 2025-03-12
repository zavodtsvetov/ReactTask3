import { InfoLayout } from "./InfoLayout";
import PropTypes from "prop-types";

export const Info = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<InfoLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};

InfoLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
