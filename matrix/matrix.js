export class Matrix {
  constructor(string) {
    this.matrix = string;
    this.firstLineNumber = new RegExp(/^([0-9]+)/gm) 
    this.leadingWhitespace = new RegExp(/^[ \t]+/gm)
  }

  splitInRows(stringMatrix) {
    return stringMatrix.split('\n').map( entry => entry.split(' ').map(entry => parseInt(entry, 10)))
  }

  splitInColumns(stringMatrix) {
    const columns = []

    let matrixToWorkOn = stringMatrix
    while (matrixToWorkOn.trim().length) {
      const column = matrixToWorkOn.match(this.firstLineNumber).map(entry => parseInt(entry, 10))
      columns.push([... column])
      matrixToWorkOn = matrixToWorkOn.replace(this.firstLineNumber, '').replace(this.leadingWhitespace, '')
    }
   return columns
  }

  get rows() {
    return this.splitInRows(this.matrix)    
  }

  get columns() {
    return this.splitInColumns(this.matrix)
  }
}
