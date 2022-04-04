async function signupFormHandler(event) {

  fetch('book', {
      method: 'get',
          
      headers: { "Content-Type": "application/json" }
  })
  .then(function(){
      // document.location.replace('/');
  })
  .catch(function(error){
      console.log("error!!");
  });
}
  
document.getElementById('time').addEventListener('click', signupFormHandler);