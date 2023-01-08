const closeSubmit = document.getElementById('submitPopup'); // get popup element

// when click to close popup
closeSubmit.addEventListener('click', e => {
    closeSubmit.style.display = 'none'; // hide popup
    const status = closeSubmit.querySelector('.popup-status'); // get status of popup
    if(status.innerHTML === "200") {
        ClearFields();
    }
})

