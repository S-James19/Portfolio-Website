// function to send email content to server and wait for response back
async function Send(mailObj) {
    // wait for response from server before making changes to client end
    const response = await fetch('/sendemail', // wait for response
    { method: 'POST', // sending form data
    headers: {'Content-Type': 'application/json'}, // sending json format
    body: (JSON.stringify(mailObj))} // convert object to json string to send
    )
    // data is successfully accessed, promise resolve
    .then(response => response.json()) // convert to json convertable format
    .then((data) => {
        return data; // return data to be accessed
    })
    .catch(error => { // dont recieve response from server
        const errMsg = {Status: 500, Message: "Error creating connection with server."}; // create message
        return JSON.parse(JSON.stringify(errMsg)); // return json format message
    });

    // apply changes to site
    FormResponse(response);
}

