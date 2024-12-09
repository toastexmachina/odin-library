const myLibrary = [];

function Book(title, medium, read) {
    // constructor here
    this.title = title;
    this.medium = medium;
    this.read = read;
};

function addBookToLibrary() {
    // moves Book objects into myLibrary Array
}

// General Structure
// User fills out form
// Submit button triggers event listener
// Form entries get stored in Book Constructor
// New objects get sent to myLibrary array
// Array entry values get added to the table

let buttonSubmit = document.querySelector('#submit')