import React from 'react';
import PropTypes from 'prop-types';

const isRoad = (rowCount) =>
	rowCount <= 1 || rowCount >=5;

const isWater = rowCount =>
	rowCount >= 2 && rowCount < 5;

const getRoadWhiteLaneOrNotClass = rowCount => {
	const isWhiteLane = rowCount === 0 || rowCount === 5;

	return isWhiteLane ? 'white-lane' : '';
};

const getRoadOrWaterClass = rowCount => {
	if(isRoad(rowCount)) {
		return 'road';
	} else if(isWater(rowCount)) {
		return 'water';
	} else {
		return '';
	}
};

const getCellClass = (rowCount) =>
	`
		col 
		${getRoadOrWaterClass(rowCount)} 
		${getRoadWhiteLaneOrNotClass(rowCount)}
	`;


const Cell = props => {

	const {
		colCount,
		rowCount
	} = props;

	return (
		<div className={getCellClass(rowCount)}>
			{rowCount} { colCount}
		</div>
	);
};

Cell.propTypes = {
	rowCount: PropTypes.number.isRequired,
	colCount: PropTypes.number.isRequired,
};

export default Cell;

