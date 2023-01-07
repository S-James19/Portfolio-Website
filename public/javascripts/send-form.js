async function Send(mailObj) {

    // wait for response from server before making changes to client end
    const response = await fetch('/sendemail', // wait for response
    { method: 'POST', // sending form data
    headers: {'Content-Type': 'application/json'}, // sending json format
    body: (JSON.stringify(mailObj))} // convert object to json string to send
    )
    // data is successfully accessed, promise resolve
    .then(response => response.json()) // success
    .then((data) => {
        return data;
    })
    .catch(error => { // fail
        console.log("There is an error");
        return "";
    });

    // apply changes to site
    FormResponse(response);
}

// function to take response and apply changes to site
function FormResponse(res) {

    if(res.Status === 200) {
        console.log("ok");
    }
    else if(res.Status === 400) {
        console.log("validation error");
    }
    else console.log("server error");
}