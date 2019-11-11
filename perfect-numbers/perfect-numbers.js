function isNaturalNumber(num) {
	return Number.isInteger(num) &&  num > 0 
}


function sumOfDivisors(num) {
	let result = 0;
	for (let i = 1; i < num; i++) {
		if (num % i ===0) {
			result += i
		}
	}
	return result 
}

export const classify = (num) => {
	if(!isNaturalNumber(num)) {
		throw new Error('Classification is only possible for natural numbers.')
	}

	const divisorSum = sumOfDivisors(num) 
	if (divisorSum === num) {
		return "perfect"
	} 

	if (divisorSum > num) {
		return "abundant"
	}	

	if (divisorSum < num) {
		return "deficient"
	}
};
