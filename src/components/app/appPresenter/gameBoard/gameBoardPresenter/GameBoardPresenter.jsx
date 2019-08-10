import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/GameBoardPresenter.scss';
import Cell from "./cell";

const getCells = (row, rowCount) => {

	return row.map((col, colCount) => {
		return (
			<Cell
				rowCount={rowCount}
				colCount={colCount}
			/>
		);
	});
};

const getRows = gameBoardMatrix =>
	gameBoardMatrix.map((row, rowCount) => (
		<div className="row">
			{getCells(row, rowCount)}
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
