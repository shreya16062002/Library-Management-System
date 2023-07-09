let bookTable = document.getElementById("bookTable");
let books = [];

function addBook() {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;
    if (title === "" || author === "" || isbn === "") {
        alert("Please enter all book information.");
    } else {
        let book = {title: title, author: author, isbn: isbn};
        books.push(book);
        displayBooks();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

function displayBooks() {
    let rows = "";
    for (let i = 0; i < books.length; i++) {
        rows += "<tr><td>" + books[i].title + "</td><td>" + books[i].author + "</td><td>" + books[i].isbn + "</td></tr>";
    }
    bookTable.innerHTML = "<tr><th>Title</th><th>Author</th><th>ISBN</th></tr>" + rows;
}
