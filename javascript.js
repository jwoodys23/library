const myLibrary = [];



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if (read === true) {
            return title + ' by ' + author + ' is ' + pages + ' pages long, has been read';
        }
        else { }
        return title + ' by ' + author + ' is ' + pages + ' pages long, not read yet';
    }
}

function addBookToLibrary (title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return myLibrary;
}

function addBookToPage(){
    const container = document.querySelector(".container");
    for(let i = 0; i < myLibrary.length; i++) {
        const addBook = document.createElement("div");
        addBook.classList.add('card');
        addBook.textContent = myLibrary[i].title;
        container.appendChild(addBook);
    }

}



lotr = new Book("Lord of the Rings", 'Tolkien', 354, false);
dune = new Book("Dune", 'Herbert', 234, true);
martian = new Book("The Martian", 'Weir', 152, false);

myLibrary.push(lotr);
myLibrary.push(dune);
myLibrary.push(martian);

