const container = document.getElementById("container");
console.log(container);
const listItems = document.querySelectorAll("li");
for (i=0; i<listItems.length; i++){
    if (listItems[i].innerHTML === "Pete"){
    listItems[i].innerHTML = "Richard";
    }
}

for (i=0; i<listItems.length; i++){
    if (listItems[i].innerHTML === "Sarah"){
    listItems[i].remove();
    }
}

const lists = document.getElementsByClassName("list");
for (i=0; i<lists.length; i++)
{
    lists[i].firstElementChild.innerHTML = "Kirsten";
    lists[i].classList.add("student_list");
}

const list1 = document.querySelector("ul");
list1.classList.add("university", "attendance");
