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
        return data;
    })
    .catch(error => { // dont recieve response from server
        const errMsg = {Status: 500, Message: "Error creating connection with server."}; // create message
        return JSON.parse(JSON.stringify(errMsg)); // return json format message
    });

    // apply changes to site
    FormResponse(response);
}

// function to take response and apply changes to site
function FormResponse(res) {
    const popup = document.getElementById('submitPopup'); // access popup
    popup.style.display = "flex"; // make popup visible
    const message = popup.querySelector('.popup-message'); // access message area
    const status = popup.querySelector('.popup-status');
    message.innerHTML= res.Message; // set popup message to recieved message from server
    status.innerHTML = res.Status; //res.Status; // set popup status to status from server
}

