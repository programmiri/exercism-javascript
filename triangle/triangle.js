class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isValidTriangle() {
    if (this.a + this.b + this.c <= 0) {
      return false;
    }

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      return false;
    }

    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
    ) {
      return false;
    }

    return true;
  }

  isEquilateral() {
    return this.a === this.b && this.b === this.c;
  }

  isIsosceles() {
    return this.a === this.b || this.a === this.c || this.b === this.c;
  }

  kind() {
    if (!this.isValidTriangle()) {
      throw new Error();
    }
    if (this.isEquilateral()) {
      return 'equilateral';
    }

    if (this.isIsosceles()) {
      return 'isosceles';
    }
    return 'scalene';
  }
}

export { Triangle };
