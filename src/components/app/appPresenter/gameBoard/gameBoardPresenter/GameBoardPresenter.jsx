import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/GameBoardPresenter.scss';
import Cell from "./cell";

const getCells = (row, rowPosition) => {

	return row.map((col, colPosition) => {
		return (
			<Cell
				rowPosition={rowPosition}
				colPosition={colPosition}
			/>
		);
	});
};

const getRows = gameBoardMatrix =>
	gameBoardMatrix.map((row, rowPosition) => (
		<div className="row">
			{getCells(row, rowPosition)}
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
