// //exercise 1
//     // #1
//         function funcOne() {
//             let a = 5;
//             if(a > 1) {
//                 a = 3;
//             }
//             alert(`inside the funcOne function ${a}`);
//         }

//         //as a is declared in the outer scope of the funcOne function, when it is redefined inside the scope of the if function, this carries over to outside the if function, meaning it will alert "inside the funcOne function 3" 
    
//     // #1.1 - run in the console:
//         funcOne()

//     // #1.2 What will happen if the variable is declared 
//     // with const instead of let ?
//         // if the variable is declared with const, it cannot be redefined as 3 so it will display error
//         // actual: "TypeError: Assignment to constant variable."

//     //#2
//         let a = 0;
//         function funcTwo() {
//             a = 5;
//         }

//         function funcThree() {
//             alert(`inside the funcThree function ${a}`);
//         }

//         // at first, a is declared / defined on the global scope as 0, so when running funcThree(), it will alert "inside the funcThree function 0". a is then redefined in funcTwo, which carries over to the global scope as a is declared on the global scope. This means when funcThree() is run again, it will alert "inside the funcThree function 5" 

//     // #2.1 - run in the console:
//         funcThree()
//         funcTwo()
//         funcThree()
//     // #2.2 What will happen if the variable is declared 
//     // with const instead of let ?
//         // if a is declared with const, funcThree() will first run, alerting, "inside the funcThree function 0", however, a cannot be redefined so there will be an error when trying to run funcTwo() next, stopping the program.


//     //#3
//         function funcFour() {
//             window.a = "hello";
//         }


//         function funcFive() {
//             alert(`inside the funcFive function ${a}`);
//         }

//         //as a is not declared inside the funcFive function or in a more outer scope (ie the global scope), funcFive() cannot run and therefore will display an error.
//         // actual: "The window is at a root/top level at the JavaScript object hierarchy. It  is a global/root object in JavaScript and it is the root object of the Document object model(DOM);" Therefore, it alerts "inside the funcFive function hello".

//     // #3.1 - run in the console:
//         funcFour()
//         funcFive()

//     //#4
//         let a = 1;
//         function funcSix() {
//             let a = "test";
//             alert(`inside the funcSix function ${a}`);
//         }

//         // as the alert is within the scope that a is redeclared, it will alert "inside the funcSix function test"

//     // #4.1 - run in the console:
//         funcSix()

//     // #4.2 What will happen if the variable is declared 
//     // with const instead of let ?
//         // if a is declared within the function with const, it will still declare "inside the funcSix function test" as it does not carry over to the global scope. However, if it is declared on the global scope with const, it will not alert and will dislay error in the console as you cannot redefine / redeclare const variables.
//         // actual: in both cases, there is no difference 
    
//     //#5
//         let a = 2;
//         if (true) {
//             let a = 5;
//             alert(`in the if block ${a}`);
//         }
//         alert(`outside of the if block ${a}`);

//         // inside the block, it will alert "in the if block 5". However, as a was redeclared in the block, this does not carry over outside the block so outside the block it will alert "outside of the if block 2"

//     // #5.1 - run the code in the console

//     // #5.2 What will happen if the variable is declared 
//     // with const instead of let ?
//         // nothing will change in both cases 

// //exercise 2
    const winBattle = () => true;

    function experiencePoints() {
        let experiencePoints;
        return winBattle() === true? experiencePoints = 10 : experiencePoints = 1;  
    }
    console.log(experiencePoints());

 

// //exercise 3
    const isString = (checked) => typeof checked === "string";
    console.log(isString('hello')); 
    console.log(isString([1, 2, 4, 0]));


// //exercise 4
    const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    let newString ="";
    colors.forEach((color, index) => {
        newString = `${newString} ${index +1}# choice is ${color}.`
    });
    console.log(newString);


// //exercise 5
    const colorss = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    const ordinal = ["th","st","nd","rd"];

    colorss.forEach((color, index) => { 
        if (index === 0){
            console.log(`${index +1 }${ordinal[1]} is ${color}`);
        } else if (index === 1){
            console.log(`${index +1 }${ordinal[2]} is ${color}`);
        } else if (index === 2) {
            console.log(`${index +1 }${ordinal[3]} is ${color}`);
        } else {
            console.log(`${index +1 }${ordinal[0]} is ${color}`);
        }
        
    });

// //exercise 6
    let bankAmount = 0;
    var VAT = 1.17;
    const details = ["+200", "-100", "+146", "+167", "-2900"];

    details.forEach((transaction) => {
        if ( transaction.charAt(0) === "+") {
            bankAmount = bankAmount + (parseFloat(transaction.substring(1)) * VAT);
        } else {
            bankAmount = bankAmount - (parseFloat(transaction.substring(1)) * VAT);
        }
    });
    console.log(bankAmount);
    


