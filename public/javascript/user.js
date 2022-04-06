
try{

document.getElementById('signUp-btn').addEventListener('click', createUser);
}catch(error){
console.error();
}


function createUser(){
    console.log("Hello!!");
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
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
        document.location.replace('/');
    })
    .catch(function(error){
        console.log("error!!");
    });
}

