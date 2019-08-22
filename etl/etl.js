export const transform = (oldMap) => {
	return Object.keys(oldMap).reduce((acc, curr) => {
		oldMap[curr].forEach((letter) => {
			acc[letter.toLowerCase()] = Number(curr);
		});
		return acc;
	}, {});
};
