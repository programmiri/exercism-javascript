function checkForErrors(leftStrand, rightStrand) {
	if (leftStrand.length !== rightStrand.length) {
		if (leftStrand.length === 0) {
			throw Error('left strand must not be empty');
		}
		if (rightStrand.length === 0) {
			throw Error('right strand must not be empty');
		}
		throw Error('left and right strands must be of equal length');
	}
}

export const compute = (leftStrand, rightStrand) => {
	const dnaStrand = leftStrand.split('');
	const dnaStrandToCompare = rightStrand.split('');

	checkForErrors(dnaStrand, dnaStrandToCompare);

	return dnaStrand.reduce((acc, curr, index) => {
		if (curr !== dnaStrandToCompare[index]) {
			acc++;
		}
		return acc;
	}, 0);
};
