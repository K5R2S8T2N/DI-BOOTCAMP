//exercise 1
    const sum = (x, y) => x + y;

//exercise 2
    //function declaration
    function changeFromKilo (mass){
        return mass*1000;
    }
    console.log(changeFromKilo(4));

    //function expression 
    const changeFromKilos = function(mass) {
        return mass*1000;
    }
    console.log(changeFromKilos(4));

    // Function declarations are hoisted to the top of the code while Function expressions can only be accessed when the line of code is reached.

    const changeFromKiloss = (mass) => mass * 1000;
    console.log(changeFromKiloss(4));

//exercise 3
    (function (children, partnersName, location, job) {
        const sentence = document.createElement('p');
        sentence.innerHTML = `You will be a ${job} in ${location}, and married to ${partnersName} with ${children} kids.`
        document.body.append(sentence);
    })(4, "John", "Israel", "Doctor");

//exercise 4
const navBar = document.getElementById("navBar");
    (function (name) {
        const userDiv = document.createElement('div')
        userDiv.style = "display: flex; flex-direction: row"
        const username = document.createElement('p');
        username.innerHTML = name; 
        const profilePic = document.createElement("img");
        profilePic.src ="https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png";
        // or add attribute 
        profilePic.style = "width:40px; height40px"
        navBar.append(userDiv);
        userDiv.append(username);
        userDiv.append(profilePic);
    })("John");

//exercise 5
    // Part I
        function makeJuice(size) {
            function addIngredients(ingredient1, ingredient2, ingredient3) {
                const sentence = document.createElement('p');
                sentence.innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`
                document.body.append(sentence);
            }
            addIngredients('apple', 'orange', 'watermelon');
        }
        makeJuice('small');

    // Part II
    function makeJuice(size) {
        const ingredients = [];
        function addIngredients(ingredient1, ingredient2, ingredient3) {
            ingredients.push(ingredient1, ingredient2, ingredient3);
        }
        addIngredients('apple', 'orange', 'watermelon');
        addIngredients('pear', 'grape', 'peach');

    function displayJuice(ingredientsArr){
        const sentence = document.createElement('p');
        sentence.innerHTML = `The client wants a ${size} juice, containing`;
        ingredientsArr.forEach((ingredient) => {
            sentence.innerHTML = `${sentence.innerHTML} ${ingredient},`
        })
        document.body.append(sentence);
    }
    displayJuice(ingredients)

    }
    makeJuice('small');

//exercise 1
    //------1------//
    const fruits = ["apple", "orange"];
    const vegetables = ["carrot", "potato"];
    const result = ['bread', ...vegetables, 'chicken', ...fruits];
    console.log(result);
        // expected output: an array like: ['bread', "carrot", "potato", 'chicken', "apple", "orange"];
        // actual output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

    //------2------//
    const country = "USA";
    console.log([...country]);
        // expected output: an array like: ["U", "S", "A"];
        // actual output: ['U', 'S', 'A']

    //------Bonus------//
    let newArray = [...[,,]];
    console.log(newArray);
        // expected output: an array like [,,];
        // actual output: [undefined, undefined]

//exercise 2
    const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
                { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
                { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
                { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
                { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
                { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
                { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

    const newUsers = users.map((value) => `Hello ${value.firstName}`);
    console.log(newUsers);

    const filteredUsers = users.filter(user => user.role === 'Full Stack Resident');
    console.log(filteredUsers);

    const filteredUsersLastName = filteredUsers.map((value) => value.lastName);
    console.log(filteredUsersLastName);

//exercise 3
    const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
    const reducer = (accumulator, currentValue) => accumulator + ' ' + currentValue;
    let epicResult = epic.reduce(reducer);
    console.log(epicResult);

//exercise 4
    const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

    const filteredStudents = students.filter(student => student.isPassed === true);
    console.log(filteredStudents);
    filteredStudents.forEach((student) => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    })

//extra exercise 
    // Part I
        const inventory = [
            { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
            { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
            { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
            { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
            { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
        ];

        function getCarHonda (carInventory) {
            const matchedCarInventory = carInventory.find(car => car.car_make === 'Honda');
            return `This is a ${matchedCarInventory.car_make} ${matchedCarInventory.car_model} from ${matchedCarInventory.car_year}`;
        }

        console.log(getCarHonda(inventory));

    // Part II
        function sortCarInventoryByYear(carInventory) {
            return [...carInventory].sort((a, b) => a.car_year - b.car_year);
        }

        console.log(sortCarInventoryByYear(inventory));