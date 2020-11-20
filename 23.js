function filterArray(numbers, value) {
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      arr.push(numbers[i]);
    }
  }

  return arr;
}
