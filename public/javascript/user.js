async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
    const doctor = document.getElementById('doctor');
    const patient = document.getElementById('patient');
    var userType = 'novalue';

    if (doctor.checked){
        userType = 'doctor'
    }
    if(patient.checked){
        userType = 'patient'
    }
  
    if (username && password) {

      const response = await fetch('user', {
        method: 'post',
        body: JSON.stringify({
          username,
          password,
          userType
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        // alert(response.statusText);
        alert(err);
      }
    }
}
  
document.getElementById('signUp-btn').addEventListener('click', signupFormHandler);

