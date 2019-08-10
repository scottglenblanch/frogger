import { get } from 'lodash';

const getIsRoad = ({ rowPosition }) =>
	rowPosition <= 1 || rowPosition >=5;

const getIsWater = ({ rowPosition }) =>
	rowPosition >= 2 && rowPosition < 5;

const getHasRoadBottomBorder = ({ rowPosition }) =>
	rowPosition === 0 || rowPosition === 5;

const getHasFrog = (state, props) => {
	const { rowPosition, colPosition } = props;
	return get(
		state,
		['gameBoardMatrix', rowPosition, colPosition],
		false
	) === 'frog';
};

export default (state, props) => ({
	...props,
	isRoad: getIsRoad(props),
	isWater: getIsWater(props),
	hasRoadBottomBorder: getHasRoadBottomBorder(props),
	hasFrog: getHasFrog(state, props),
});
