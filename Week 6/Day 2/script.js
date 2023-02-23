//exercise 1
    const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        if(num < 10){
            resolve("Number is less than 10");
        } else {
            reject("Number is greater than or equal to 10");
        }
    });
    
    }
    compareToTen(15)
        .then(result => console.log(result))
        .catch(error => console.log(error))

    compareToTen(8)
        .then(result => console.log(result))
        .catch(error => console.log(error))

//exercise 2
    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("success")}, 4000);
    });
    newPromise.then(data => console.log(data));
    const newPromise1 = Promise.resolve(setTimeout(() => {console.log("success")}, 4000));

//exercise 3
    Promise.resolve(3).then(value => console.log(value));
    Promise.reject("Boo!").catch(error => console.log(error));

//exercise 4

//exercise 1
    fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',{
        method: "GET"
    }).then(response => {
        return response.json()
        })
    .then(data => {
        console.log(data)
        })
    .catch(err => {
        console.log('Request Failed', err)
        });
        
        // redone as class
            // const gifRetrieve = () => {
            //     const container = document.getElementById("container");
            //     const searchQuery = document.getElementById("myInput");
            //     const value = searchQuery.value;
            //     container.innerHTML = "";
            //     fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`).then((data) => {
            //         return data.json();
            //     }).then((value) => {
                    
            //         value.data.forEach(element => {
            //             const img = document.createElement("img");
            //             img.setAttribute("src",element.images.original.url);
            //             img.style = "width:100px; height:140px; margin:5px; border: 6px double white; padding: 8px; background: rgb(104, 44, 12);";
            //             container.append(img);
            //         });
            //     })
            // };
            // const button = document.getElementById("button");
            // button.addEventListener("click", gifRetrieve);

            // using async functions 
            const gifRetrieve = async () => {
                try{
                    let gifs = await fetch ('https://api.giphy.com/v1/gifs/search?q=cat&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=1&limit=10');
                    let response = await gifs.json();
                    console.log(response);
                }catch (err){
                    console.log("there was an issue with your fetch:", err);
                }
            };
            gifRetrieve();

//exercise 2
    fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2',{
        method: "GET"
    }).then(response => {
        return response.json()
        })
    .then(data => {
        console.log(data)
        })
    .catch(err => {
        console.log('Request Failed', err)
        });

