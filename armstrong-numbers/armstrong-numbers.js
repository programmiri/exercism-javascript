function getDigitList(num) {
  return num
    .toString()
    .split('')
    .map(item => parseInt(item, 10));
}

export function validate(num) {
  const digests = getDigitList(num);

  const sum = digests.reduce((acc, curr) => {
    const raised = curr ** digests.length;
    return acc + raised;
  }, 0);

  return sum === num;
}
