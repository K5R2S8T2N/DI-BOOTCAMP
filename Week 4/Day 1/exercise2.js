const divUsers = document.getElementById("div");
console.log(divUsers);
divUsers.style.backgroundColor = " lightblue";
divUsers.style.padding = "20px";
const listItems = document.getElementsByTagName("li");
for (i=0; i<listItems.length; i++){
    if (listItems[i].innerHTML === "John"){
        listItems[i].setAttribute("style", "display: none");
    }
}

for (i=0; i<listItems.length; i++){
    if (listItems[i].innerHTML === "Pete"){
        listItems[i].setAttribute("style", "border: 2px solid blue");
    }
}

document.body.style.fontSize = "20px";

if (divUsers.hasAttribute("style", "backgroundColor: lightblue")){
    alert(`Hello ${listItems[0].innerHTML} and ${listItems[1].innerHTML}`);
}