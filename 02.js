function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Добро пожаловать!";
  }
  return "Доступ запрещён, неверный пароль!";
}
