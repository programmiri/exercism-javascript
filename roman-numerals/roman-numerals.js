const list = [
  { letter: 'M', num: 1000 },
  { letter: 'D', num: 500 },
  { letter: 'C', num: 100 },
  { letter: 'L', num: 50 },
  { letter: 'X', num: 10 },
  { letter: 'V', num: 5 },
  { letter: 'I', num: 1 },
];

const combinationsToShorten = [
  { string: 'DCCCC', shortener: 'CM' },
  { string: 'CCCC', shortener: 'CD' },
  { string: 'LXXXX', shortener: 'XC' },
  { string: 'XXXX', shortener: 'XL' },
  { string: 'VIIII', shortener: 'IX' },
  { string: 'IIII', shortener: 'IV' },
];

function shortenMultipleLetters(string) {
  return combinationsToShorten.reduce((acc, curr) => {
    return acc.replace(curr.string, curr.shortener);
  }, string);
}

export function toRoman(numToConvert) {
  const result = list.reduce(
    (acc, curr) => {
      const multiple = Math.floor(acc.rest / curr.num);

      const currNum = [];

      if (acc.rest > 0 && multiple > 0) {
        acc.rest -= curr.num * multiple;
        [...Array(multiple)].forEach(() => {
          currNum.push(curr.letter);
        });
        acc.list.push(currNum.join(''));
      }
      return acc;
    },
    {
      rest: numToConvert,
      list: [],
    }
  );
  return shortenMultipleLetters(result.list.join(''));
}
