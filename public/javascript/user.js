document.getElementById('signUp-btn').addEventListener('click', createUser);


function createUser(){
    console.log("Hello!!");
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
    fetch('user', {
        method: 'post',
        body: JSON.stringify({
            username,
            password

        }),
            

        headers: { "Content-Type": "application/json" }
    })
    .then(function(){
        document.location.replace('/doctor/appointments');
    })
    .catch(function(error){
        console.log("error!!");
    });
}

// async function signupFormHandler(event) {
//     event.preventDefault();


//     const username = document.querySelector('#username-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (username && password) {
//         const response = await fetch('/user', {
//             method: 'POST',
//             body: JSON.stringify({
//                 username,
//                 password
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         if (response.ok) {
//             console.log('success');


//             document.location.replace('/dashboard');

//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// document.getElementById('signUp-btn').addEventListener('click', signupFormHandler);
