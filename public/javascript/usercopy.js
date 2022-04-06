// async function signupFormHandler(event) {
//   event.preventDefault();

//   const username = document.getElementById('username-input').value.trim();
//   const password = document.getElementById('password-input').value.trim();
//   const doctor = document.getElementById('doctor');
//   const patient = document.getElementById('patient');
//   var usertype = 'novalue';

//   if (doctor.checked){
//       usertype = "doctor"
//   }
//   if(patient.checked){
//       usertype = "patient"
//   }

//   if (username && password) {
//       console.log("usertype: "+userType);
//     const response = await fetch('user', {
//       method: 'post',
//       body: JSON.stringify({
//         username,
//         password,
//         usertype
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     // check the response status
//     if (response.ok) {
//       console.log('success');
//       document.location.replace('/');
//     } else {
//       // alert(response.statusText);
//       alert(err);
//     }
//   }
// }

// document.getElementById('signUp-btn').addEventListener('click', signupFormHandler);