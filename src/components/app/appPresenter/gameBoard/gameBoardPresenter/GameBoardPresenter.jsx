import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/GameBoardPresenter.scss';


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

const getColClass = (rowCount) =>
	`col ${getRoadOrWaterClass(rowCount)} ${getRoadWhiteLaneOrNotClass(rowCount)}`;

const getColumns = (row, rowCount) => {

	return row.map((col, colCount) => {
		return (
			<div className={getColClass(rowCount)}>
				{rowCount} { colCount}
			</div>
		);
	});
};

const getRows = gameBoardMatrix =>
	gameBoardMatrix.map((row, rowCount) => (
		<div className="row">
			{getColumns(row, rowCount)}
		</div>
	));

const GameBoardPresenter = props => {

	const { gameBoardMatrix } = props;

	return (
		<div className="game-board">
			{getRows(gameBoardMatrix)}
		</div>
	);
};

GameBoardPresenter.propTypes = {
	gameBoardMatrix: PropTypes.arrayOf(
		PropTypes.array
	).isRequired,
};

export default GameBoardPresenter;
