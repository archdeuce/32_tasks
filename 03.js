function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "В заказе еще нет товаров";
  } else if (ordered > available) {
    return "Слишком большой заказ, на складе недостаточно товаров!";
  }

  return "Заказ оформлен, с вами свяжется менеджер";
}
