  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0uTzvRabvKLdZtZZWr6eeTtXukwH-dv8",
    authDomain: "contact-me-6ae9c.firebaseapp.com",
    databaseURL: "https://contact-me-6ae9c.firebaseio.com",
    projectId: "contact-me-6ae9c",
    storageBucket: "",
    messagingSenderId: "969164893575"
  };
  firebase.initializeApp(config);

var msgref= firebase.database().ref('message');

document.getElementById("contactform").addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();

    // console.log(123);
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('textarea');

    saveMessages(name, email, message);

    //show alert

    document.querySelector(".alert").style.display = 'block';

    //hide alert after 3 sec
    setTimeout(function(){
      document.querySelector(".alert").style.display = 'none';
    },3000);

    //clear
    document.getElementById('contactform').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessages(name, email, message){
  var newMessageRef = msgref.push();
  newMessageRef.set({
    name : name,
    email : email,
    message : message
  });
}