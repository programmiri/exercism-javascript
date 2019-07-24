export const convert = (input) => {
	let result = '';

	if (input % 3 === 0) {
		result = result + 'Pling';
	}
	if (input % 5 === 0) {
		result = result + 'Plang';
	}
	if (input % 7 === 0) {
		result = result + 'Plong';
	}
	return result.length > 0 ? result : input.toString();
};
