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
	const lowerCaseString = string.toLowerCase()
	return alphabet.every((char) => lowerCaseString.includes(char));
};
