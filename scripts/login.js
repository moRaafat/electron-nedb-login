const database = require('../scripts/logindb');

window.onload = function() {


    event.preventDefault();
  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    var firstname = document.getElementById('username');
    var lastname = document.getElementById('password');

    // Save the person in the database
    database.addPerson(username.value, password.value);

    // Reset the input fields
    username.value = '';
    password.value = '';

  
  });
  return false;
}


 function validateForm() {

     event.preventDefault();

    var user = document.loginform.user.value;
    var pass = document.loginform.pass.value;

     database.getPersons(function(admin){

    var username = admin.username; 
    var password = admin.password;
    if ((user == username) && (pass == password)) {
        return false;
    }
    else {
        alert ("Error , please check your username and password");
        return false;
    }

     });        
}
