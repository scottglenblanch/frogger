import {
	UP_ACTION,
	RIGHT_ACTION,
	DOWN_ACTION,
	LEFT_ACTION,
} from './KeyPressedActionConstants';

export const upAction = () => ({
	type: UP_ACTION
});

export const rightAction = () => ({
	type: RIGHT_ACTION
});

export const downAction = () => ({
	type: DOWN_ACTION
});

export const leftAction = () => ({
	type: LEFT_ACTION
});
