export const getInitialState = () => ({

});

export default (state = getInitialState(), action) => {

	console.log(action);

	return {
		...state,
	};

}