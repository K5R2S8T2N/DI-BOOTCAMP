//exercise 1
    let favFood = "chocolate";
    let favMealDay = "dinner";
    console.log("I eat " + favFood + " at every " + favMealDay);

//exercise 2
    const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
    myWatchedSeriesLength = length.myWatchedSeries;
    myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2]
    console.log("I watch 3 series : " + myWatchedSeriesSentence);

    myWatchedSeries.splice(2, 1, "friends");
    myWatchedSeries.push("Wednesday");
    myWatchedSeries.unshift("The 100");
    myWatchedSeries.splice(1, 1);
    console.log(myWatchedSeries[1].charAt(2));
    // or console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")].charAt(2))
    console.log(myWatchedSeries);

//exercise 3
    let tempCelsius = 34;
    let tempFahrenheit = tempCelsius * 1.8 + 32; 
    console.log(tempCelsius + "°C is " + tempFahrenheit + "°F");

//exercise 4
    let c;
    let a = 34;
    let b = 21;

    console.log(a+b); //first expression
    // Prediction: It will output 55, because 34 and 21 are numbers
    // Actual: 55

    a = 2;

    console.log(a+b); //second expression
    // Prediction: It will output 23 as 'a' has been redefined as the number 2.
    // Actual: 23

    //Q.3: 'c' is undefined. 

    console.log(3 + 4 + '5');
    // Prediction: It will output 75 as the 3 and 4 will add to 7, being numbers, but the 5, being a string, will just join to the end.
    // Actual: 23

 //exercise 5
    
    typeof(15)
    // Prediction: It will output number as 15 is in the form of a number. 
    // Actual: number 

//typeof(5.5)
// Prediction: It will output float as 5.5 is in the form of a float. 
// Actual: number 

    typeof(NaN)
    // Prediction: It will output not a number or some other phrasing as NaN is for all forms but number.
    // Actual: number

    typeof("hello")
    // Prediction: It will output string as "hello" is a string.
    // Actual: string

    typeof(true)
    // Prediction: It will output boolean as true is a boolean expression. 
    // Actual: boolean

    typeof(1 != 2)
    // Prediction: It will output boolean as the answer to the expression is true, which is a boolean expression. 
    // Actual: boolean

    "hamburger" + "s"
    // Prediction: It will output hamburgers as the two strings add together. 
    // Actual: hamburgers

    "hamburgers" - "s"
    // Prediction: It will output error or some other form as you cannot perform mathematical actions on strings.
    // Actual: NaN

    "1" + "3"
    // Prediction: It will output 13 as both '1' and '3' are in string form. 
    // Actual: 13

    "1" - "3"
    // Prediction: It will output NaN as the '1' and '3' are in string form
    // Actual: -2

    "johnny" + 5
    // Prediction: It will output johnny5 
    // Actual: johnny5

    "johnny" - 5
    // Prediction: It will output NaN as 'johnny' is not a number.
    // Actual: NaN

    99 * "hello"
    // Prediction: It will output NaN as hello is not a number. 
    // Actual: NaN

    1 != 1
    // Prediction: It will output false as 1 = 1.
    // Actual: false

    1 == "1"
    // Prediction: It will output true as 1 = 1.
    // Actual: true

    1 === "1"
    // Prediction: It will output false as the 1's are in different forms. 
    // Actual: false

//exercise 6
    5 + "34"
    // Prediction: 39
    // Actual:

    5 - "4"
    // Prediction: 1
    // Actual:

    10 % 5
    // Prediction: 2
    // Actual:

    5 % 10
    // Prediction: 0.5
    // Actual:

    "Java" + "Script"
    // Prediction: JavaScript
    // Actual:

    " " + " "
    // Prediction:  (ie double space)
    // Actual:

    " " + 0
    // Prediction: 0 (ie space 0)
    // Actual:

    true + true
    // Prediction:
    // Actual:

    true + false
    // Prediction:
    // Actual:

    false + true
    // Prediction:
    // Actual:

    false - true
    // Prediction:
    // Actual:

    !true
    // Prediction:
    // Actual:

    3 - 4
    // Prediction:
    // Actual:

    "Bob" - "bill"
    // Prediction:
    // Actual: