//exercise 1
    // Part I   
        // function HelloWorld() {
        //     alert("Hello World");
        // }
        // setTimeout(HelloWorld, 2000);


    // Part II
        // function newHelloWorld() {
        //     const greetings = document.createElement("p");
        //     greetings.innerHTML = "Hello World";
        //     const container = document.getElementById("container");
        //     container.append(greetings);
        // }
        // setTimeout(newHelloWorld, 2000);

    // Part III
        let number = 5;
        function continuousNewHelloWorld() {
            const container = document.getElementById("container");
                if(number === 0){
                    clearInterval(endTimer);
                } else {
                    const greetings = document.createElement("p");
                    greetings.innerHTML = "Hello World";
                    container.append(greetings);
                    number--;
                }    
                }

        const endTimer = setInterval(continuousNewHelloWorld, 2000);
        const timeoutButton = document.getElementById("clear");
        timeoutButton.addEventListener("click", function clear () {
            clearInterval(endTimer)});

//exercise 2
    const box = document.getElementById("animate");
    let pos = 0;
    let movement;

    function frame() {
            if (pos === 350) {
                clearTimeout(movement);
            } else {
                pos++;
                box.style.left = pos + "px";
                movement = setTimeout(frame, 1);
            }
        }

    function myMove () {
        movement = setTimeout(frame, 1);
    }

//exercise 3
    const movingBox = document.getElementById("box");
    movingBox.addEventListener("dragstart", function (e){
        e.dataTransfer.setData("text/plain", e.target.id);
    })

    const destinationBox = document.getElementById("target");
    destinationBox.addEventListener("dragover", function (e) {
        e.preventDefault();
    })

    destinationBox.addEventListener("drop", function (e) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text"); 
        destinationBox.append(document.getElementById(data));
    })