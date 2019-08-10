import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import CellPresenter from './cellPresenter';

export default connect(mapStateToProps)(CellPresenter);
