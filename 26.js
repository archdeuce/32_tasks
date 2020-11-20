function calculateTotalPrice(order) {
  let total = 0;

  for (let value of order) {
    total += value;
  }

  return total;
}
