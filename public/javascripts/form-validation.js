
// get required fields
const submitForm = document.getElementById('submitForm');
const formTitle = document.getElementById('formTitle');
const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formSubject = document.getElementById('formSubject');
const formMessage = document.getElementById('formMessage');
const submit = document.getElementById('formSubmit');

let empty = []; // create array to store empty fields
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email format
let canSend = true; // if form can be sent
// error content
const border = 'field-error-border';
const content = '.field-error-content';

// what to run when the form submit button is clicked
submit.addEventListener("click", e => {
    e.preventDefault(); // dont refresh the page
    if(!canSend) ClearPrevious();
    ValidateForm(); // check to see if form is good to be sent
})

// function to reset fields if got wrong before
function ClearPrevious() {
    // reset all empty fields UI
    if(empty.length > 0) { // check for empty fields
        for(let e = 0; e < empty.length; e++) { // loop through empty fields
            ModifyErrorStatus(empty[e], "", false);
        }
    }
    empty = []; // clear empty fields from array
    canSend = true; // reset whether form can send or not
}

// function to check if all form fields are good before sending
function ValidateForm() {
    //check each field
    if(formTitle.value === "Choose") empty.push(formTitle); // check empty title
    if(formName.value === "") empty.push(formName); // check empty name
    if(formEmail.value === "") empty.push(formEmail); // check empty email
    else if (!validEmail.test(formEmail.value)) { // check valid email
        ModifyErrorStatus(formEmail, "Please enter a valid email address.", true); // send notification
    }
    if(formSubject.value === "") empty.push(formSubject); // check empty subject
    if(formMessage.value === "") empty.push(formMessage); // check empty message

    //check to see if form can send
    if(empty.length > 0) { // check to see if there are any empty fields
        for(let f = 0; f < empty.length; f++) { // loop through all empty fields
            ModifyErrorStatus(empty[f], "Missing field.", true); // send notification
        }
    } // check to see if there are any validation errors
    else if(canSend) SendForm();
}

// activate error on UI
function ModifyErrorStatus(id, message, action) {
    const parentID = id.parentElement; // get parent element of input
    const errorContent = parentID.querySelector(content); // get div storing error content
    errorContent.innerHTML = message; // add message text to content
    if(action) { // is error
        id.classList.add(border); // add border
        if(canSend) canSend = false; // stop form from sending
    } // reset error
    else id.classList.remove(border); // no error, remove border
}

//function to send form after validation
function SendForm() {
    console.log("ready to go captain");
}