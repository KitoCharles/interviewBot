var firebaseConfig = {
    apiKey: "AIzaSyDzdK2IW_uY-JTPCZ-ELAFGx8IOOYdVANM",
    authDomain: "interviewbot-f6587.firebaseapp.com",
    databaseURL: "https://interviewbot-f6587.firebaseio.com",
    projectId: "interviewbot-f6587",
    storageBucket: "interviewbot-f6587.appspot.com",
    messagingSenderId: "323622453220",
    appId: "1:323622453220:web:f20d41d9e3201076"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //Gain Access to firebase
  const auth = firebase.auth();
  const db = firebase.firestore();

//get elements
const txtEmail = document.getElementById('email_input')
const txtPassword = document.getElementById('password_input')
const loginForm = document.querySelector('#signin-form')
const logoutForm = document.querySelector('#signOutBtn')





//sign in
 loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = txtEmail.value;
    const pass = txtPassword.value;

    auth.signInWithEmailAndPassword(email, pass).then(cred => {
      loginForm.reset();
      loginForm.querySelector('.error').innerHTML = " ";
    }).catch(err => {
      loginForm.querySelector('.error').innerHTML = err.message;
      
    })

 });

//sign out

// logoutForm.addEventListener('click', (e) => {
//   e.preventDefault();


//   auth.signOut()
    
  

// });



//checks if user is logged in or not and does things accordingly
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){ 
      console.log("logged in")
      window.location.href = "../chatBot/chatBot.html";
  }else {
      console.log('not logged in')
  }
});


