function includes(array, value) {
  for (let item of array) {
    if (item === value) return true;
  }

  return false;
}
