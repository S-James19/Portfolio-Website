async function Send(mailObj) {

    // wait for response from server before making changes to client end
    await fetch('/sendemail', // wait for response
    { method: 'POST', // sending form data
    headers: {'Content-Type': 'application/json'}, // sending json format
    body: (JSON.stringify(mailObj))} // convert object to json string to send
    )
    // data is successfully accessed, promise resolve
    .then(response => FormResponse(response.status)) // success
    // data couldn't be collected, promise rejected
    .catch(error => { // fail
        console.log("There is an error");
    });
}

function FormResponse(status) {
    if(status === 200) {
        console.log("ok");
    }
    else if(status === 406) {
        console.log("validation error");
    }
    else console.log("server error");
}