

var signupform = document.getElementById('signupform')

signupform.addEventListener('submit', createUser);


function createUser(e){
    e.preventDefault();
    console.log("Hello!!");
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    var usertype = 'novalue';

    if (doctor.checked){
        usertype = "doctor"
    }
    if(patient.checked){
        usertype = "patient"
    }


    fetch('user', {
        method: 'post',
        body: JSON.stringify({
            username,
            password,
            usertype
        }),
        
        headers: { "Content-Type": "application/json" }
    })
    .then(function(){
        console.log("Redirect");
        document.location.replace('/');
    })
    .catch(function(error){
        console.log("error!!");
    });
}

