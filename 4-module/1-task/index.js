function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  for (let key in friends) {
    li = document.createElement("li");
    li.textContent += friends[key].firstName + " " + friends[key].lastName;
    ul.appendChild(li);
  }
  return ul;
}

// map - всегда возвращает последний li - думал, получится через map, или это вообще невозможно...

// это я для себя чисто
// function makeFriendsList(friends) {
//   let ul = document.createElement("ul");
//   for (let i = 0; i < friends.length; i += 1) {
//     let li = document.createElement("li");
//     li.innerHTML = friends[i].firstName + " " + friends[i].lastName;
//     ul.appendChild(li);
//   }
//   return ul;
// }
