// Add submit event listeners for signup and login forms
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

// Login form submission handler
const loginFormHandler = async (event) => {
  event.preventDefault();

// Get form values
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Validate form values
  if (!email || !password) {
    alert('Please fill out all fields');
    return;
  }
  // Verify user credentials
  const loginResponse = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  // Check response status
  if (loginResponse.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log in');
  }
};

// Signup form submission handler
const signupFormHandler = async (event) => {
  event.preventDefault();

// Get form values
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

 // Validate form values
  if (!username || !email || !password) {
    alert('Please fill out all fields');
    return;
  }

  // Check if username and email are not already in use
  const existingUserResponse = await fetch('/api/users/exists', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email  
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  // Check response status
  if (existingUserResponse.ok) {
    alert('Username or email already in use');
    return;
  }

  // If valid, create new user account
  const createUserResponse = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  // Check response status
  if (createUserResponse.ok) {
    document.location.replace('/favorite-team'); 
  } else {
    alert('Failed to sign up');
  }
};

// Add event listeners to login forms
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  // Add event listeners to signup forms
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
