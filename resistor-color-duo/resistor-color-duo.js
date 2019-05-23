const colorMap = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

function value(colorNameList) {
  const numAsString = colorNameList
    .reduce((acc, curr) => {
      acc.push(colorMap.indexOf(curr));
      return acc;
    }, [])
    .join('');
  return Number(numAsString);
}

export { value };
