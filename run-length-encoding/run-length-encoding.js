function encode(string) {
  const match = string.match(/(.)\1{1,}/g);
  if (!match) return string;

  return match.reduce((acc, curr) => {
    const count = curr.length;
    const matchedChar = curr[0];
    return acc.replace(curr, `${count}${matchedChar}`);
  }, string);
}

function decode(string) {
  const match = string.match(/(\d+)(\w|\s)/g);
  if (!match) return string;

  return match.reduce((acc, curr) => {
    const num = parseInt(curr.match(/\d+/g));
    const char = curr.replace(num, '');
    const decoded = [...Array(num)].reduce((acc) => {
      return acc + char;
    }, '');

    return acc.replace(curr, decoded);
  }, string);
  return match;
}

export { encode, decode };
