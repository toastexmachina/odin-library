const myLibrary = [];

// Variable Declaration
const form = document.querySelector('form');

// Book Constructor
function Book(title, medium, status) {
    // constructor here
    this.title = title;
    this.medium = medium;
    this.status = status;
};

function addBookToLibrary() {
    // moves Book objects into myLibrary Array
}

// General Structure
// User fills out form
// Submit button triggers event listener
// Form entries get stored in Book Constructor

let buttonSubmit = document.querySelector('#submit');

buttonSubmit.addEventListener('click', function(event){
    event.preventDefault();
    // call Book function here
    let newBook = Book (form.title.value, form.medium.checked, form.status.checked);
    // Push new object to the arry
    myLibrary.push(newBook);
    // Clear the Form
    form.title.value = '';
    form.medium.checked = '';
    form.status.checked ='';
})
// Array entry values get added to the table
//

