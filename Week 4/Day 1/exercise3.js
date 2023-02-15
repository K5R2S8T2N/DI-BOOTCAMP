const divMain = document.getElementById("navBar");
divMain.setAttribute("id", "socialNetworkNavigation");
let newLi = document.createElement("li");
let newTextNode = document.createTextNode("Logout");
newLi.append(newTextNode);
const unorderedList = document.querySelector("ul");
unorderedList.appendChild(newLi);
console.log(unorderedList.firstElementChild.textContent);
console.log(unorderedList.lastElementChild.textContent);
