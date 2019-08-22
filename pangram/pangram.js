//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'c',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
export const isPangram = (string) => {
	return alphabet.every((char) => string.toLowerCase().includes(char));
};
