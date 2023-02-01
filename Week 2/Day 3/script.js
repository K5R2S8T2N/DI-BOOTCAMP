// exercise 1
    const people = ["Greg", "Mary", "Devon", "James"];
    people.shift();
    people.splice(2, 1, "Jason");
    people.push("Kirsten");
    console.log(people.indexOf("Mary")); 
    console.log(people.slice(1, 3));
    console.log(people.indexOf("Foo")); //returning -1 indicates the "Foo" is not present 
    const last = people[people.length - 1];


    for (let x in people) {
        console.log(people[x]);
    }

    for (let x in people) {
        if (people[x] === "Jason") {
            console.log(people[x]);
            break;
        }
        console.log(people[x]);
    }


// exercise 2
    const colors = [ "red", "orange", "yellow", "green", "blue"];
    colors.forEach((colour, a) => {
        console.log(`My #${a + 1} choice is ${colour}`);
    })

    //bonus
    const suffixes = ["st", "nd", "rd", "th", "th"];
    colors.forEach((colour, a) => {
        console.log(`My ${a + 1}${suffixes[a]} choice is ${colour}`)
    })

// exercise 3
    let userNumber = parseFloat(prompt("Pick a number"));
    typeof userNumber; 
    while (userNumber < 10){
        userNumber = parseFloat(prompt("Pick a number"));
    }

// exercise 4
    const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent:  {
            sarah: [3, 990],
            dan:  [4, 1000],
            david: [1, 500],
        },
    }
    console.log(building.numberOfFloors);
    console.log(`floor 1: ${building.numberOfAptByFloor.firstFloor} and floor 3: ${building.numberOfAptByFloor.thirdFloor}`);
    let sarahDavidSum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
    if (sarahDavidSum > building.numberOfRoomsAndRent.dan[1]){
        building.numberOfRoomsAndRent.david[1] = 1200;
    }

// exercise 5
    const family = {
        fatherName: "John",
        motherName: "Jane",
        daughterName: "June",
        sonName: "Josh",
    }
    for (let x in family) {
        console.log(x);
    }
    for (let x in family) {
        console.log(family[x]);
    }

// exercise 6
    const details = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer'
    }
    let identification = "";
    for (let x in details) {
        identification = `${identification}${x} ${details[x]} `;
    }
    console.log(identification);

// exercise 7
    const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
    names.sort();
    let secretSociety = "";
    for (i = 0; i < names.length; i++){
        secretSociety = `${secretSociety}${names[i].charAt(0)}`;
    }
    console.log(secretSociety);