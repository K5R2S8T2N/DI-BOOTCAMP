// const allBooks = [
//     {title: "Anna Karenina",
//     author: "Leo Tolstoy",
//     image: "https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_.jpg",
//     alreadyRead: "false"
//     },

//     {title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     image: "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
//     alreadyRead: "false"
//     }
// ]

// const mainDiv = document.querySelector(".listBooks");
// console.log(allBooks);
// const bookTable = document.createElement("table");
// mainDiv.append(bookTable);
// allBooks.forEach((book) => {
//     let row = document.createElement("tr");
//     bookTable.append(row);
//     let title = document.createElement("td");
//     title.textContent = book.title;
//     row.append(title);
//     let author = document.createElement("td");
//     author.textContent = book.author;
//     row.append(author);
//     let image = document.createElement("td");
//     image.setAttribute("src", "book.image"); 
//     row.append(image);  
// })

// redone as class

const allBooks = [
    {title: "The Hunger Games",
    author: "Suzanne Collins",
    image: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg",
    alreadyRead: true
    },

    {title: "The Fault in Our Stars",
    author: "John Green",
    image: "https://m.media-amazon.com/images/I/817tHNcyAgL.jpg",
    alreadyRead: false
    }
]

const container = document.querySelector(".listBooks");
const table = document.createElement("table");
container.append(table);
for (book in allBooks[0]){
    const header = document.createElement("th");
    header.innerHTML = book;
    table.append(header);
}
// defining in loops is only for that specific iteration 

allBooks.forEach((element)=> {
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const image = document.createElement("td");
    const alreadyRead = document.createElement("td");

    title.innerHTML = element.title;
    author.innerHTML = element.author;
    image.innerHTML = `<img src="${element.image}" alt="book image">`;
    alreadyRead.innerHTML = element.alreadyRead;

    table.append(row);
    row.append(title, author, image, alreadyRead);
    if (element.alreadyRead){
        row.style.background = "red"; 
    }
})

