function getCommonElements(array1, array2) {
  const arr = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) arr.push(array1[i]);
  }

  return arr;
}
