document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all the fields!');
        if (!name) document.getElementById('name').classList.add('error');
        if (!email) document.getElementById('email').classList.add('error');
        if (!message) document.getElementById('message').classList.add('error');
    } else {
        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');
    }
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
