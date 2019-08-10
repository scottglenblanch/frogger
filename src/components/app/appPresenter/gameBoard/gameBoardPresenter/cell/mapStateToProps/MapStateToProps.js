const getIsRoad = ({ rowPosition }) =>
	rowPosition <= 1 || rowPosition >=5;

const getIsWater = ({ rowPosition }) =>
	rowPosition >= 2 && rowPosition < 5;

const getHasRoadBottomBorder = ({ rowPosition }) =>
	rowPosition === 0 || rowPosition === 5;

export default (state, props) => ({
	...props,
	isRoad: getIsRoad(props),
	isWater: getIsWater(props),
	hasRoadBottomBorder: getHasRoadBottomBorder(props)
});
