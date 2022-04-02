document.getElementById('signUp-btn').addEventListener('click', createUser);


function createUser(){
    console.log("Hello!!");
    const usernameElement = document.getElementById('username-input');
    const passwordElement = document.getElementById('password-input');
    fetch("User", {
        method: 'post',
        body: JSON.stringify({
            username: usernameElement.value,
            password: passwordElement.value
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
