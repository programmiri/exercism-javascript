function divideByTwo(num) {
  return num / 2;
}

function multiplyByThreeAddOne(num) {
  return num * 3 + 1;
}

function steps(number) {
  if (number <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  let currNumber = number;
  let count = 0;
  while (currNumber !== 1) {
    if (currNumber % 2 === 0) {
      currNumber = divideByTwo(currNumber);
    } else {
      currNumber = multiplyByThreeAddOne(currNumber);
    }

    count++;
  }
  return count;
}

export { steps };
