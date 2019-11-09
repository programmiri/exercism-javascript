export class Words {
  count(string) {
  	const words = string.toLowerCase().trim().split(/[\s]+/g)

  	return words.reduce((acc, curr) => {
  		if (acc[curr] && !isNaN(acc[curr])) {
  			acc[curr] = acc[curr] + 1
  		} else {
				acc[curr] = 1
  		}
			return acc
  	}, {})
  }
}
