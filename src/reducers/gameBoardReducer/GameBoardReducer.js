import { range } from 'lodash';

export const getInitialState = (rowSize, colSize) =>
	range(rowSize).map(rowCount =>
		range(colSize).map(colSize  => null)
	);

export default (
	state = getInitialState(
		10,
		10),
	action
) => {

	console.log('state', state);
	return [...state];
}