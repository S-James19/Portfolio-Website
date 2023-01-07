// Script contains source code from: https://www.youtube.com/watch?v=DqyJFV7QJqc

function Send(form) {
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    
    fetch('/sendemail', {
        method: 'POST',
        body: data
    })
    .then(res => {
        console.log(res.json());
    })
}