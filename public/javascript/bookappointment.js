async function signupFormHandler(e) {

        var time = e.target.dataset.timeslot
        var date = e.target.dataset.date
        var doctorName = e.target.dataset.doctor
        var availability = e.target.dataset.availability
    
        var symptoms = 'broken leg'
        
        aptEntry = JSON.stringify({
                
                doctorName,
                date,
                time,
                symptoms
            })
        
        fetch('book-appointment', {
            method: 'post',
            body: aptEntry,
            
            headers: { "Content-Type": "application/json" }
        })
        .then(function(){
            alert(`Your Appointment with ${doctorName} on ${date} at ${time} has been booked successfully!`);
            document.location.replace('/patient/appointments');
        })
        .catch(function(error){
            console.log("error!!");
        });
    
//   fetch('book', {
//       method: 'get',
          
//       headers: { "Content-Type": "application/json" }
//   })
//   .then(function(){
//       // document.location.replace('/');
//   })
//   .catch(function(error){
//       console.log("error!!");
//   });
}
  
$('#container').click(function(e) {signupFormHandler(e)});