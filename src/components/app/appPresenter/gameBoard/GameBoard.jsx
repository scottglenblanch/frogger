import React from 'react';
import { connect } from 'react-redux';
import GameBoardPresenter from './gameBoardPresenter';
import mapStateToProps from './mapStateToProps';

export default connect(
	mapStateToProps
)(GameBoardPresenter);


