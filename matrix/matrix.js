export class Matrix {
  constructor(string) {
    this._rows = this.splitInRows(string)
    this._columns = this.splitInColumns(string)
  }

  splitInRows(matrix) {
    return matrix.split('\n').map( entry => entry.split(' ').map(entry => parseInt(entry, 10)))
  }

  splitInColumns(matrix) {
    const firstLineNumber = new RegExp(/^([0-9]+)/gm) 
    const leadingWhitespace = new RegExp(/^[ \t]+/gm)
    const columns = []

    let matrixToWorkOn = matrix

    while (matrixToWorkOn.trim().length) {
      const column = matrixToWorkOn.match(firstLineNumber).map(entry => parseInt(entry, 10))
      columns.push([... column])

      matrixToWorkOn = matrixToWorkOn.replace(firstLineNumber, '').replace(leadingWhitespace, '')
    }
   return columns
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._columns
  }
}
