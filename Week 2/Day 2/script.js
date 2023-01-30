//exercise 1
    let x = 5;
    let y = 2;
    if (x > y){
        console.log("x is the bigger number");
    } else if (x < y){
        console.log("y is the bigger number");
    } else {
        console.log("x and y are the same number");
    }

//exercise 2
    let newDog = "Chihuahua";
    let noLetters = newDog.length;
    console.log(noLetters);
    console.log(newDog.toUpperCase());
    console.log(newDog.toLowerCase());
    if (newDog === "Chihuahua"){
        console.log("I love Chihuahuas, it’s my favorite dog breed");
    } else {
        console.log("I dont care, I prefer cats");
    }


//exercise 3
    userNumber = parseFloat(prompt("pick a number"));

    if (userNumber%2 === 0){ 
        console.log( userNumber + " is an even number");
    } else {
        console.log ( userNumber + " is an odd number");
    }

//exercise 4
    const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
    if (users.length === 0) {
        console.log("no one is online");
    } else if (users.length === 1) {
        console.log(users[0] + " is online");
    } else if (users.length === 2) {
        console.log(users[0] + " and " + users[1] + " are online");
    } else {
        let noUsers = users.length;
        console.log(users[0] + ", " + users[1] + " and " + (noUsers - 2) + " more are online");
    }

//loop questions 

//exercise 1
    for(i = 1; i < 11; i++){
        console.log(i);
    }
//exercise 2
    let letterNo = 0;
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    while (letterNo < 26){
        console.log(alphabet[letterNo]);
        letterNo++;
    }
    //or 
    let alphabetWord = "abcdefghijklmnopqrstuvwxyz";
    let letterLoop = 0;
    while (letterLoop < alphabetWord.length){
        console.log(alphabetWord.charAt(letterLoop));
        letterLoop++; 
    }

//exercise 3
    let numbers = 2;
    while (numbers <12){
        console.log(numbers);
        numbers = numbers + 2;
    }
//exercise 4
    for (i=1; i<=9; i = i + 2){
        console.log(i);
    }

    //or
    for (i=1; i<=9; i++){
        if (i%2 != 0){
        console.log(i);
        }
    }