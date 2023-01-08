const popup = document.getElementById('submitPopup'); // get popup element
const popupstatus = popup.querySelector('.popup-status');
const popupmessage = popup.querySelector('.popup-message'); // access message area

// when click to close popup
popup.addEventListener('click', e => {
    popup.style.display = 'none'; // hide popup
    if(popupstatus.innerHTML === "200") { // if email was sent
        ClearFields(); // reset for next email
    }
});

// function to take response of popup action and format popup box
function FormResponse(res) {
    popup.style.display = "flex"; // make popup visible
    popupmessage.innerHTML= res.Message; // set popup message to recieved message from server
    popupstatus.innerHTML = res.Status; //res.Status; // set popup status to status from server
}
