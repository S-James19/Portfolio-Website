// code reference: https://www.youtube.com/watch?v=30VeUWxZjS8

const contactForm = document.querySelector('.contact-form'); // find contact form element

// store contact form information
let ftitle = document.getElementById('formTitle');
let fname = document.getElementById('formName');
let femail = document.getElementById('formEmail');
let fsubject = document.getElementById('formSubject');
let fmessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page from refreshing and removing data

    // create object storing information for transfer to backend
    let formData = {
        title: ftitle.value,
        name: fname.value,
        email: femail.value,
        subject: fsubject.value,
        message: fmessage.value
    }

    // create http request with server
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact-email'); // open post request
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        if(xhr.responseText == 'success') { // if sending email to backend is successful
            alert('Email sent!'); // notify user
            // clear all fields for another use
            ftitle.value = "";
            fname.value = "";
            femail.value = "";
            fsubject.value = "";
            fmessage.value = "";
            xhr.send(JSON.stringify(formData));
        }
        else { // error sending email
            alert("Error sending email, try again"); // alert user
        }
    }
})