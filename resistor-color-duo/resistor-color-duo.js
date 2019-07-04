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

function getColorCode(name) {
  return colorMap.indexOf(name);
}

function value(colorNameList) {
  const colorCodes = colorNameList.map(getColorCode).join('');
  return Number(colorCodes);
}

export { value };
