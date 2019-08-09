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
  const auth = firebase.auth();

//get elements
const txtEmail = document.getElementById('emailtTxt')
const txtPassword = document.getElementById('passwordTxt')
const btnLogin = document.getElementById('loginBtn')
const btnSignUp = document.getElementById('createBtn')


//sign in


btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
})

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser)
    }else {
        console.log('not logged in')
    }
});