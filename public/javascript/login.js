// const { response } = require('express');

var loginform = document.getElementById('loginform')
loginform.addEventListener('submit', loginformhandler);

function loginformhandler(event) {
    event.preventDefault();
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
  
    if (username && password) {

    
    fetch('login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(function(data){
          if (data.user.usertype=='doctor'){
            document.location.replace('/doctor');
          }
          else{
            document.location.replace('/patient');
          }
        });

    }
    // json method ///
    
}
  
