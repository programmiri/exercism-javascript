function modulo(number, factor) {
	return number % factor === 0;
}

export const convert = (input) => {
	let result = '';

	if (modulo(input, 3)) {
		result = result + 'Pling';
	}
	if (modulo(input, 5)) {
		result = result + 'Plang';
	}
	if (modulo(input, 7)) {
		result = result + 'Plong';
	}

	if (result.length === 0) return input.toString();
	return result;
};
