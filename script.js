const myLibrary = [];

// Variable Declaration
const form = document.querySelector('form');
const tableLibrary = document.querySelector('table');

// Book Constructor
function Book(title, medium, status) {
    // constructor here
    this.title = title;
    this.medium = medium;
    this.status = status;
}

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

    // Create new table data elements
    let newEntry = document.createElement('tr');
    tableLibrary.appendChild(newEntry);
    let newTitle = document.createElement('td');
    let newMedium = document.createElement('td');
    let newStatus = document.createElement('td');

    let newRemoveCell = document.createElement('td');
    let newRemoveButton = document.createElement('button');
    newRemoveButton.classList.add('remove');
    newRemoveButton.textContent = "X";
    newRemoveButton.addEventListener('click', function(event){
        newEntry.remove();
    })

    newEntry.appendChild(newTitle);
    newEntry.appendChild(newMedium);
    newEntry.appendChild(newStatus);
    newEntry.appendChild(newRemoveCell);
    newRemoveCell.appendChild(newRemoveButton);

    // call Book function here
    let newBook = new Book(form.title.value, form.medium.value, form.status.value);
    // Push new object to the arry
    myLibrary.push(newBook);

    // Add text content to the new table data
    newTitle.textContent = form.title.value;
    newMedium.textContent = form.medium.value;
    newStatus.textContent = form.status.value;

    // Clear the Form
    form.title.value = '';
    form.medium.value = '';
    form.status.value ='';
});