function showSalary(users, age) {
  return users
    .filter((user) => user.age <= age)
    .map((user) => `\n${user.name}, ${user.balance}`)
    .join(" ")
    .slice(1);
}
