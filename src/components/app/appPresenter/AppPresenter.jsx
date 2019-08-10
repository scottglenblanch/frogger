import React from "react";
import GameBoard from './gameBoard';

const AppPresenter = props => (
	<div className="app"
	>
		Frogger Game
		<GameBoard />
	</div>
);

export default AppPresenter;