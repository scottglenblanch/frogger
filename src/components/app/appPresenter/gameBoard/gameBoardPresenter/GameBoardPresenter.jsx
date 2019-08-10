import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const getColumns = row => row.map(col => (
	<div className="col">

	</div>
));

const getRows = gameBoardMatrix =>
	gameBoardMatrix.map(row => (
		<div className="row">
			{getColumns(row)}
		</div>
	));

const GameBoardPresenter = props => {

	const { gameBoardMatrix } = props;
	console.log('props', props, 'gameBoardMatrix', Array.isArray(gameBoardMatrix))
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
