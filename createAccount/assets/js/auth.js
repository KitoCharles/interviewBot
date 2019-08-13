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
const txtEmail = document.getElementById('emailtTxt')
const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const txtPassword = document.getElementById('passwordTxt')
const btnSignUp = document.getElementById('createBtn')
const signupForm = document.querySelector("#signup-form")


//create account
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = txtEmail.value;
    const pass = txtPassword.value;

    //sign uo the user
    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            displayName: (firstName.value + " " + lastName.value)
        });
        // 
        // after creating account i want to have the user go back to homepage to login.
        // 
    })
    
})

//confirm passwords script
const password = document.getElementById('passwordTxt')
const confirm_password = document.getElementById('confirmPassword');
	function validatePassword() {
		if (password.value != confirm_password.value) {
			confirm_password.setCustomValidity('Passwords Don\'t Match');
		} else {
			confirm_password.setCustomValidity('');
		}
	}
	password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
    


            


  




