function playTheGame() {
    let wantToPlay = confirm("would you like to play the game?");
    if (!wantToPlay) {
        alert("No problem, Goodbye");
        return; 
    } else {
        let userNo = noZeroToTen();
        const computerNumber = Math.floor(Math.random() * 11);
        compareNumbers(userNo,computerNumber); 
        return; 
        } 
}

function noZeroToTen() {
    let numbZeroToTen = prompt("Please enter a number between 0 and 10");
    while(isNaN(numbZeroToTen) || numbZeroToTen == "" || numbZeroToTen.indexOf(" ") !=-1 || numbZeroToTen > 10 || numbZeroToTen < 0) {
        if(isNaN(numbZeroToTen) || numbZeroToTen == "" || numbZeroToTen.indexOf(" ") !=-1){
            alert("Sorry Not a number, please try again");
            numbZeroToTen = prompt("Please enter a number between 0 and 10");
        }
        if(numbZeroToTen > 10 || numbZeroToTen < 0){
            alert("Sorry it’s not a good number, please try again");
            numbZeroToTen = prompt("Please enter a number between 0 and 10");
        }
    }
    return numbZeroToTen; 
}

function compareNumbers(userNumber,computerNumber) {
    let counter = 0; 
    let newUserNumber = userNumber; 
    console.log(computerNumber);
    while (counter < 2){
        counter ++; 
        if (newUserNumber > computerNumber){
            alert("Your number is bigger then the computer’s, guess again");
            newUserNumber = noZeroToTen(); 
        } else if (newUserNumber < computerNumber){
            alert("Your number is smaller then the computer’s, guess again");
            newUserNumber = noZeroToTen();
        } else {
            alert("WINNER");
            return;
        } 
    }
    if (newUserNumber == computerNumber ){
        alert("WINNER");
        return;
    }
    alert("out of chances");
    return; 
}

