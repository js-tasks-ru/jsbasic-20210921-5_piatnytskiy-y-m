function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

// изначально сделал так.
// str = str.split("-");
// return str
//   .map(item, (index) =>
//     index === 0 ? item : item[0].toUpperCase() + item.slice(1)
//   )
//   .join("");
