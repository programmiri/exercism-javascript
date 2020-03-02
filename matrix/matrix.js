export class Matrix {
  constructor(string) {
    this.matrix = string;
  }

  splitInRows() {

    const rowsFirst = this.matrix.split('\n').map( entry => entry.split(''))
    // .map( entry => parseInt(entry))
    console.log(rowsFirst)
  }

  get rows() {
    const test = this.splitInRows()
    // console.log(this.splitInRows())
    return test
  }

  get columns() {
    
  }
}
