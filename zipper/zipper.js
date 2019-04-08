const Zipper = class {
  constructor(tree, focus = null, parent = null) {
    this.tree = tree;
    this.parent = parent;
    this.focus = focus || tree;
  }

  static fromTree(tree) {
    return new Zipper(JSON.parse(JSON.stringify(tree)));
  }

  toTree() {
    return this.tree;
  }

  left() {
    if (!this.focus.left) return null;
    return new Zipper(this.tree, this.focus.left, this.focus);
  }

  right() {
    if (!this.focus.right) return null;
    return new Zipper(this.tree, this.focus.right, this.focus);
  }

  value() {
    return this.focus.value;
  }

  up() {
    if (!this.parent) return null;
    return new Zipper(this.tree, this.parent, this.focus);
  }

  setValue(val) {
    this.focus.value = val;
    return new Zipper(this.tree, this.focus, this.parent);
  }

  setLeft(val) {
    this.focus.left = val;
    return new Zipper(this.tree, this.focus, this.parent);
  }

  setRight(val) {
    this.focus.right = val;
    return new Zipper(this.tree, this.focus, this.parent);
  }
};

export { Zipper };
