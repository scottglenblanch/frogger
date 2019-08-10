import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/GameBoardPresenter.scss';

const getColumns = (row, rowCount) => {
	return row.map((col, colCount) => {
		return (
			<div className="col">
				{rowCount} { colCount}
			</div>
		);
	});
}


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
