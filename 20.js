function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }

  return total;
}
