let detailsObject = {
    Height: "",
    Gender: "",
    "Birth Year": "",
    "Home World": "",
};

// function to generate random person 
const personRetrieve = async () => {

    // remove current person text 
    for (const [key, value] of Object.entries(detailsObject)) {
        const text = document.getElementById(`${key}`);
        if(document.body.contains(text)){
            text.remove()
        }
    }
    const displayName = document.getElementById("displayName");
    if(document.body.contains(displayName)){
        displayName.remove();
    }

    const errorMessage = document.getElementById("errorMessage");
    if(document.body.contains(errorMessage)){
        errorMessage.remove();
    }

    // add loading screen
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.removeProperty("display");

    // reset details object
    detailsObject = {
        Height: "",
        Gender: "",
        "Birth Year": "",
        "Home World": "",
    }

    const detailsContainer = document.getElementById("detailsContainer");

    // get random person and save details 
    const personNumber = Math.floor(Math.random() * 83) + 1;
    try{
        let details = await fetch (`https://www.swapi.tech/api/people/${personNumber}`);
        let response = await details.json();
        let name = response.result.properties.name;
        let height = response.result.properties.height;
        detailsObject.Height = height;
        let gender = response.result.properties.gender;
        detailsObject.Gender = gender;
        let birthYear = response.result.properties.birth_year;
        detailsObject["Birth Year"] = birthYear;
        let homeWorldFetch = await fetch(`${response.result.properties.homeworld}`);
        let homeWorldResponse = await homeWorldFetch.json();
        let homeWorld = homeWorldResponse.result.properties.name;
        detailsObject["Home World"] = homeWorld;

        const displayName = document.createElement('h1');
        displayName.innerHTML = `${name}`;
        displayName.style = "font-family: nameFont, monospace;"
        detailsContainer.append(displayName);
        displayName.id= "displayName";
        for (const [key, value] of Object.entries(detailsObject)) {
            const newLine = document.createElement('p');
            newLine.id = `${key}`;
            newLine.innerHTML = `${key}: ${value}`;
            detailsContainer.append(newLine);
        }
        loadingScreen.style.display = "none";

    }catch (err){
        loadingScreen.style.display = "none";
        const errorMessage = document.createElement("p");
        errorMessage.id="errorMessage";
        errorMessage.innerHTML = "Oh No! That person isn't available";
        detailsContainer.append(errorMessage);
    }
};


// add event listener to button
const findSomeoneButton = document.getElementById("findSomeoneButton");
findSomeoneButton.addEventListener("click", personRetrieve);