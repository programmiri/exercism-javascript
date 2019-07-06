//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const translationMap = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U',
};

export const toRna = (string) => {
	return string.replace(/G|C|T|A/g, (match) => {
		return translationMap[match];
	});
};
