async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
  
    if (username && password) {
      const response = await fetch('login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.getElementById('login-btn').addEventListener('click', signupFormHandler);