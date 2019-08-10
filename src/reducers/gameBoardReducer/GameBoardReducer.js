import { range } from 'lodash';

export const getBlankMatrix = (rowSize, colSize) =>
	range(rowSize).map(rowCount =>
		range(colSize).map(colSize  => null)
	);

export const getInitialState = (rowSize, colSize) => {
	const frogRowPosition = rowSize - 1;
	const frogColPosition = Math.floor(colSize / 2);
	const matrix = getBlankMatrix(rowSize, colSize);
	matrix[frogRowPosition ][frogColPosition] = 'frog';

	console.log('matrix', matrix)

	return matrix;
};

export default (
	state = getInitialState(
		7,
		10),
	action
) => {

	console.log('state', state);
	return [...state];
}