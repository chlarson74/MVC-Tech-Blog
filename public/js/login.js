const loginFormHandler = async (event) => {
    event.preventDefault();

// gathers info from the login form
const email = document.querySelector('#email-login').ariaValueMax.trim();
const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (email && password) {
        //Send a POST request to the API endpoint
        const repsonse = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            header: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successfu, redirect the browswer to the profile page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            header: { 'Content-Type': 'applicatoin/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
        
