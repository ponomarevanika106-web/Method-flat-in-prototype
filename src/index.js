class MyArray extends Array {}

MyArray.prototype.flat = function(depth = 1) {
  const result = new MyArray();

  const flatten = (arr, currentDepth) => {
    arr.forEach(item => {
      if (item instanceof MyArray && currentDepth > 0) {
        flatten(item, currentDepth - 1);
      } else {
        result.push(item);
      }
    });
  };

  flatten(this, depth);
  return result;
};

// тест
const arr = new MyArray(
  1,
  new MyArray(2, new MyArray(3, 4)),
  5
);

console.log(arr.flat(2));