const firebaseConfig = {
    apiKey: "AIzaSyBO48VWRJznSd3IRp7WluHP3IlyzyBCqUI",
    authDomain: "solargreen-noit.firebaseapp.com",
    databaseURL: "https://solargreen-noit-default-rtdb.firebaseio.com",
    projectId: "solargreen-noit",
    storageBucket: "solargreen-noit.firebasestorage.app",
    messagingSenderId: "790791082863",
    appId: "1:790791082863:web:850414ae06a28175a38e9a"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstName = getElementVal("firstName");
  var lastName = getElementVal("lastName");
  var email = getElementVal("email");
  var address = getElementVal("address");
  var company = getElementVal("company");
  var message = getElementVal("message");

  


  saveMessages(firstName,lastName,email,address,company,message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (firstName,lastName,email,address,company,message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    firstName: firstName,
    lasttName: lastName,
    email: email,
    address: address,
    company: company,
   message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};  