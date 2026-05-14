class MyArray {
  constructor(...items) {
    this.items = items;
  }

  flat(depth = 1) {
    const result = [];

    const flatten = (arr, currentDepth) => {
      arr.forEach(item => {
        if (Array.isArray(item) && currentDepth > 0) {
          flatten(item, currentDepth - 1);
        } else {
          result.push(item);
        }
      });
    };

    flatten(this.items, depth);

    return result;
  }
}

// тест
const arr = new MyArray(
  1,
  [2, [3, 4]],
  5
);

console.log(arr.flat(2));