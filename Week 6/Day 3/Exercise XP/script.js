//exercise 1
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
    const getStarship = async () => {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        const data = await response.json();
        console.log(data.result);
    };
    getStarship();

//exercise 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
    // outcome: 
        // calling 
        //** Promise {<pending>}
        // resolved