export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
    let count = 0;
    for (let i = 1; i <= this.number; i++ ) {
      count += Math.pow(i, 2)
    }
    return count;
  }

  get squareOfSum() {
    let count = 0;
    for (let i = 1; i <= this.number; i++ ) {
      count += i
    }
    return Math.pow(count, 2)
  }

  get difference() {
    return  this.squareOfSum - this.sumOfSquares
  }
}