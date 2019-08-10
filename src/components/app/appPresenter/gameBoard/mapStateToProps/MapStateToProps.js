import { get } from 'lodash';

export const getGameBoardMatrix = (state) => {
	console.log('state', state);

	return get(state, ['gameBoardMatrix']);
};

export default (state, props) => ({
	...props,
	gameBoardMatrix: getGameBoardMatrix(state),
});
