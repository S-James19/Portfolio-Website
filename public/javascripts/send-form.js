// function to send validated email to server
async function Send(mailObj) {

    // wait for response from server before making changes to client end
    const response = await fetch('/sendemail', // wait for response
    { method: 'POST', // sending form data
    headers: {'Content-Type': 'application/json'}, // sending json format
    body: (JSON.stringify(mailObj))}); // convert object to json to send

    console.log(response);
}