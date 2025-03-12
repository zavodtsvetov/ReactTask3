import PropTypes from "prop-types";
import s from "./Field.module.css";
let nextId = 0;

export const FieldLayout = ({ field, handleCLick }) => {
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

FieldLayout.propTypes = {
	field: PropTypes.object,
	handleCLick: PropTypes.func,
};
