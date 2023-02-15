//exercise 1
    const h1 = document.querySelector("h1");
    console.log(h1);
    const article = document.querySelector("article");
    const lastP = article.lastElementChild; 
    article.removeChild(lastP);
    const h2 = document.querySelector("h2");
    h2.addEventListener("click", function changeBackground (event) {
        event.target.style.background = "red";
    });
    const h3 = document.querySelector("h3");
    h3.addEventListener("click", function hideH3 (event) {
        event.target.style.display = "none";
    });

    const newButton = document.createElement("button");
    newButton.innerHTML = "make text bold";
    article.append(newButton);
    newButton.addEventListener("click", function makeTextBold (){
        const paragraphs = article.children;
        for (i=0; i< paragraphs.length; i++){
            paragraphs[i].style.fontWeight = "bold";
        }
    });
    h1.addEventListener("mouseover", function randomPixel (event) {
        event.target.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
    });
    h2.addEventListener("mouseover", function fadeOut(event){
        event.target.classList.add("fade-out");
    });
    h2.addEventListener("mouseout", function fadeOut(event){
        event.target.classList.remove("fade-out");
    });

//exercise 2
    const form = document.querySelector("form");
    console.log(form);
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    const submit = document.getElementById("submit");
    console.log(fname);
    console.log(lname);
    console.log(submit);
    fname = document.getElementsByName("fname");
    lname = document.getElementsByName("lname");
    console.log(fname);
    console.log(lname);

    fname = document.getElementById("fname");
    lname = document.getElementById("lname");
    const fnameList = document.createElement("li");
    const lnameList = document.createElement("li");

    form.addEventListener("submit", function form(e) {
        e.preventDefault(); 
        const unorderedList = document.querySelector(".usersAnswer");
        if (fname.value != ""){
            fnameList.innerHTML = fname.value;
            unorderedList.append(fnameList);
        } 
        if (lname.value != "") {
            lnameList.innerHTML = lname.value; 
            unorderedList.append(lnameList);
        }  
    });

//exercise 3
    let allBoldItems; 
    function getBold_items() {
        allBoldItems = document.querySelectorAll("strong");
        console.log(allBoldItems);
    }

    function highlight() {
        getBold_items()
        for(i=0; i<allBoldItems.length; i++){
            allBoldItems[i].style.color = "blue";
        }
    }

    function return_normal() {
        for(i=0; i<allBoldItems.length; i++){
            allBoldItems[i].style.color = "black";
        }
    }
    const paragraph3 = document.getElementById("paragraph3"); 
    paragraph3.addEventListener("mouseover", highlight);
    paragraph3.addEventListener("mouseout", return_normal);

//exercise 4
    const volumeForm = document.getElementById("MyForm");
    const radius = document.getElementById("radius");
    const volume = document.getElementById("volume");

    volumeForm.addEventListener("submit", function form(e) {
        e.preventDefault(); 
        if (!isNaN(radius.value) && radius.value > 0){
            volume.value = `${4/3 * Math.PI * Math.pow(radius.value, 3)}`;
        } else {
            alert("please enter a valid radius");
        }
    });

//exercise 4 (done as class)
    const button = document.getElementById("exerciseSubmitButton");
    button.addEventListener("click", function calc(e){
        e.preventDefault();
        let inputRadius = document.getElementById("radiusInput").value;
        const outputVolume = document.getElementById("volumeOutput");
        outputVolume.value = (4/3) * 3.14 * (inputRadius * inputRadius * inputRadius); 
        document.getElementById("radiusInput").value="";
    })

//exercise 5 
    const exercise5Text = document.createElement("p");
    exercise5Text.textContent = "Element for... Exercise 5: Event Listeners";
    document.body.append(exercise5Text);

    const fontWeightArray = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "bold", "bolder", "lighter", "normal"];

    exercise5Text.addEventListener("dblclick", function makeBold (event) {
        event.target.style.fontWeight = `${fontWeightArray[Math.floor(Math.random() * fontWeightArray.length)]}`;
    })


    exercise5Text.addEventListener("mouseover", function changeColor (event) {
        event.target.style.background = `${coloursArray[Math.floor(Math.random() * coloursArray.length)]}`;
        event.target.style.fontFamily = "none";
    });

    exercise5Text.addEventListener("mouseout", function changeColor (event) {
        event.target.style.fontFamily = "cursive";
        event.target.style.background = "none";
    });


    const coloursArray = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple", "pink"];
    exercise5Text.addEventListener("click", function changeColor (event) {
        event.target.style.color = `${coloursArray[Math.floor(Math.random() * coloursArray.length)]}`;
    });
