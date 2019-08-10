import React from 'react';
import PropTypes from 'prop-types';
import './styles/CellPresenter.scss';


const getClassName = ({ isRoad, isWater, hasRoadBottomBorder, hasFrog}) => {
	let className = 'cell ';

	if(hasFrog) {
		className += 'frog ';
	} else {
		if(isRoad) {
			className += 'road ';
		}
		if(isWater) {
			className += 'water ';
		}
		if(hasRoadBottomBorder) {
			className += 'white-lane';
		}
	}

	return className.trim();
};


const CellPresenter = props => {

	const {
		colPosition,
		rowPosition,
	} = props;

	return (
		<div className={getClassName(props)}>

		</div>
	);
};

CellPresenter.propTypes = {
	rowPosition: PropTypes.number.isRequired,
	colPosition: PropTypes.number.isRequired,
	isRoad: PropTypes.bool.isRequired,
	isWater: PropTypes.bool.isRequired,
	hasRoadBottomBorder: PropTypes.bool.isRequired,
	hasFrog: PropTypes.bool.isRequired,
};

export default CellPresenter;

