const planetMap = {
	earth: 1,
	mercury: 0.2408467,
	venus: 0.61519726,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132,
};

function roundFloat(float, dec) {
	return +Number.parseFloat(float).toFixed(dec);
}

export const age = (planet, seconds) => {
	const baseSeconds = 31557600;
	const yearsNonRounded = seconds / (baseSeconds * planetMap[planet]);
	return roundFloat(yearsNonRounded, 2);
};
