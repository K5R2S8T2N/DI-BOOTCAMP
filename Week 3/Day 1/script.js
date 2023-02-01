//exercise 1
    function infoAboutMe(){
        console.log("Hi my name is Kirsten, I am 18 years old and I like coding");
        return;
    }
    infoAboutMe();

    function infoAboutPerson(personName, personAge, personFavoriteColor){
        console.log(`You name is ${personName}, you are ${personAge} years old, your favorite colour is ${personFavoriteColor}`);
    }
    infoAboutPerson("David", 45, "blue");
    infoAboutPerson("Josh", 12, "yellow");

//exercise 2
    function calculateTip(){
        let bill = parseFloat(prompt("How much is the bill?"));
        if (bill < 50){
            let tip = bill * 0.2; 
            console.log(tip + bill);
            return;
        } else if (bill <= 200){
            let tip = bill * 0.15; 
            console.log(tip + bill);
            return;
        } else {
            let tip = bill * 0.10; 
            console.log(tip + bill);
            return; 
        }
    }
    calculateTip()

//exercise 3
    function isDivisible(divisor){
        let numbersList = "";
        let numbersSum = 0;
        for (i = 0; i<=500; i++){
            if (i%divisor === 0){
                numbersList = `${numbersList} ${i}`;
                numbersSum = numbersSum + i;
            }
        }
        console.log(`Outcome :${numbersList}`);
        console.log(`Sum : ${numbersSum}`);
        return;
    }
    isDivisible(23);

//exercise 4
    const stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    }  

    const prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    } 

    const shoppingList = ["banana", "orange", "apple"];
    function myBill() {
        let price = 0;
        for (i=0; i<shoppingList.length; i++){
            if (shoppingList[i] in stock){
                if (stock[shoppingList[i]] >0){
                    price = price + prices[shoppingList[i]];
                    stock[shoppingList[i]] --; 
                }
            }
        }
        console.log(`Bill: $${price}`);
        return;
    }
    myBill();

//exercise 5
    function changeEnough(itemPrice, amountOfChange){
        let changeSum = 0;
        let typeOfCoin;
        for (i=0; i<amountOfChange.length; i++){
            typeOfCoin = i + 1; 
            switch(typeOfCoin){
                case 1:
                    changeSum = changeSum + (amountOfChange[i] * 0.25);
                    break;
                case 2:
                    changeSum = changeSum + (amountOfChange[i] * 0.10);
                    break;
                case 3:
                    changeSum = changeSum + (amountOfChange[i] * 0.05);
                    break;
                case 4:
                    changeSum = changeSum + (amountOfChange[i] * 0.01);
                    break;
            }
        }
        if (changeSum >= itemPrice){
            return true;
        } else {
            return false;
        }
    }
    console.log(changeEnough(14.11, [2,100,0,0]));
    console.log(changeEnough(0.75, [0,0,20,5]));

//exercise 6 (done bonus way)
    function hotelCost(numNights){
        return 140 * numNights;
    }

    function planeRideCost(placeDestination){
        if (placeDestination.toLowerCase() === "london"){
            return 183;
        } else if (placeDestination.toLowerCase() === "paris") {
            return 220;
        } else {
            return 300;
        }
    }

    function rentalCarCost(numDays) {
       if(numDays > 10){
        return 0.95 * numDays * 40;
       } else {
        return numDays * 40;
       } 
    }

    function totalVacationCost() {
        let noNights = prompt("How many night would you like to stay in the hotel for?");
        while(isNaN(noNights) || noNights == "" || noNights.indexOf(" ") !=-1 || noNights < 0){
             noNights = prompt("How many night would you like to stay in the hotel for?");
        }
        let destination = prompt("What is your destination?");
        while(!isNaN(destination)|| destination == "" || destination.charAt(0) === " "){
            destination = prompt("What is your destination?");
        }
        let noDays = prompt("How many days would you like to rent a car for?");
        while(isNaN(noDays) || noDays == "" || noDays.indexOf(" ") !=-1 || noDays < 0){
            noDays = prompt("How many days would you like to rent a car for?");
       }
        return hotelCost(noNights) + planeRideCost(destination) + rentalCarCost(noDays);
    }
    console.log(totalVacationCost());



//harder questions 

//exercise 1
    function isBlank(stringToCheck){
        for (i=0; i<stringToCheck.length; i++){
           if (stringToCheck.charAt(i) != " "){
            return false;
           }
        }
        return true; 
    }

//exercise 2
    function abbrevName(fullName){
        let abbreviatedName = "";
        let position = 0;
        while (fullName.charAt(position) != " "){
            abbreviatedName = abbreviatedName + fullName.charAt(position);
            position++;
        }
        for (i=position; i<fullName.length; i++){
            if (fullName.charAt(i) === " "){
                abbreviatedName = `${abbreviatedName} ${fullName.charAt(i+1)}.`
            }
        }
    return abbreviatedName;
    }

//exercise 3
    function swapCase(stringToSwapCase){
        let swappedString=""
        for (i=0; i<stringToSwapCase.length; i++){
            if (stringToSwapCase.charAt(i) === stringToSwapCase.charAt(i).toUpperCase()){
                swappedString = swappedString + stringToSwapCase.charAt(i).toLowerCase();
            } else {
                swappedString = swappedString + stringToSwapCase.charAt(i).toUpperCase();
            }
        }
        return swappedString;
    }
    console.log(swapCase("The Quick Brown Fox"));

//exercise 4
    function isOmnipresent(outerArray, argumentChecking){
        let testingInner;
        let innerrArrayCounter;
        let checkingArray = Array(outerArray.length).fill('false');
       
        //forming checkingArray
        for (i=0; i<outerArray.length; i++){
            testingInner = 0;
            innerrArrayCounter = 0;
            while (innerrArrayCounter < outerArray[i].length){
                if(outerArray[i][innerrArrayCounter] === argumentChecking){
                    checkingArray.splice(i,1,"true");
                }
                innerrArrayCounter++;
            }
        }

        //checking checkingArray 
        for (i=0; i<checkingArray.length; i++){
            if (checkingArray[i] === "false"){
                return false;
            }
        }
        return true;
    }