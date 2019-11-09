export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
    let count = 0;
    for (let i = 1; i <= this.number; i++ ) {
      count += i * i
    }
    return count;
  }

  get squareOfSum() {
    let count = 0;
    for (let i = 1; i <= this.number; i++ ) {
      count += i
    }
    return count * count;
  }

  get difference() {
    return  this.squareOfSum - this.sumOfSquares
  }
}