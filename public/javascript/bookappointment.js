async function signupFormHandler(e) {
    
        console.log(e)
        var time = e.target.dataset.timeslot
        var date = e.target.dataset.date
        var doctorName = e.target.dataset.doctor
    
        var symptoms = 'broken leg'
        
        aptEntry = JSON.stringify({
                
                doctorName,
                date,
                time,
                symptoms
            })
        console.log(aptEntry)
        //var url = '/patient/appointments/call/' + e.target.dataset.aptid
        // document.location.replace(url);
        alert(`Your Appointment with ${doctorName} at ${time} has been booked successfully!`);


        fetch('book-appointment', {
            method: 'post',
            body: aptEntry,
            
            headers: { "Content-Type": "application/json" }
        })
        .then(function(){
            // document.location.replace('/');
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