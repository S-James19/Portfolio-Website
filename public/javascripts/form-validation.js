// get required fields
const formTitle = document.getElementById('formTitle');
const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formSubject = document.getElementById('formSubject');
const formMessage = document.getElementById('formMessage');
const form = document.getElementById('contactForm');

const fields = [formTitle, formName, formEmail, formSubject, formMessage]; // all fields
let empty = []; // store empty fields
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email format
let canSend = true; // if form can be sent
// error content
const border = 'field-error-border';
const content = '.field-error-content';

// wait for submit to be clicked
form.addEventListener('submit', e => {
    e.preventDefault(); // dont refresh page
    if(!canSend) ClearPrevious(); // if attempted before, reset
    ValidateForm(); // start validating fields
})

// function to reset fields
function ClearPrevious() {
        for(let f = 0; f < fields.length; f++) { // loop through fields
            ModifyErrorStatus(fields[f], "", false); // reset status
        }

        empty = []; // clear all empty fields
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

    if(canSend) PrepareSend();
}

// function to update field UI for user with message
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

// function to create object of form contents to send to server
function PrepareSend() {
    let mail = {
        "Title": formTitle.value,
        "Name": formName.value,
        "Email": formEmail.value,
        "Subject": formSubject.value,
        "Message": formMessage.value
    }
    Send(mail);
}

//function to clear fields after validation
function ClearFields() {
    formName.value = "";
    formEmail.value = "";
    formMessage.value = "";
    formSubject.value = "";
}