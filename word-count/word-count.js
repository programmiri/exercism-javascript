export class Words {
  count(string) {
  	const words = string.toLowerCase().trim().split(/[\s]+/g)

  	return words.reduce((acc, curr) => {
  		if (!acc[curr] || acc[curr] && isNaN(acc[curr])) {
				acc[curr] = 1
				return acc
  		}
  		acc[curr] += 1
			return acc
  	}, {})
  }
}
