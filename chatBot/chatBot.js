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

// chatbot 
let chat = document.querySelector("input1");

$("#submit").click(function(){
    let userInput = $("#chat").val().toLowerCase();
  
    $("#chat").val("")
    let lastQuestion= false;
    if(userInput == "yes"){
        youMessage(userInput);
        botMessage("Okay, starting the interview for Software Engineer. Which question would you like to practice?");
        botMessage("Type '1' to practice the question: What is the average salary for a software engineer?");
        botMessage("Type '2' to practice the question: What is the programming language of the web?");
        botMessage("Type '3' to practice the question: What year was the programming language, Javascript, created?");
    }
    else if(userInput == 1){
        youMessage(userInput);
        let questions = interviewQuestions.questions;
        let question  =  questions[userInput -1];
        botMessage(question.question);
        lastQuestion  = true;

    }
    else if(userInput == 2){
        youMessage(userInput);
        let questions = interviewQuestions.questions;
        let question  =  questions[userInput - 1];
        botMessage(question.question);
        lastQuestion  = true;

    }
    else if(userInput == 3){
        youMessage(userInput);
        let questions = interviewQuestions.questions;
        let question  =  questions[userInput -1 ];
        botMessage(question.question);
        lastQuestion  = true;
    }
    else if(userInput == 1995){
        youMessage(userInput);
        botMessage("You're correct!")
    }
    else if(userInput == "107195"){
        youMessage(userInput);
        botMessage("You're correct!")
    }
    else if(userInput.toLowerCase() == "javascript"){
        youMessage(userInput);
        botMessage("You're correct!")
    }
    else{
        youMessage(userInput);

        botMessage("You are wrong.")


    }
})



function checkValidity(userAnswer, answer){
    if(userAnswer == answer){
        botMessage("You are correct.")
    }
    else{
        botMessage("You are wrong.")
    }

}

function youMessage(text){
    let messageWrapper = $("<div/>", {
        "class": "message-row you-message"
    }).prependTo("#chat-message-list")

    let messageText = $("<div/>", {
        "class": "message-text",
        "text": text
    }).appendTo(messageWrapper);

    let nameDisplay = $("<div/>", {
        "class": "name-display",
        "text": "User"
    }).appendTo(messageWrapper);
    return messageText
}

// if(userMessage = "y"){
//     console.log(botMessage)
// }

function botMessage(bm){

    // let userMessage = $(".message-text")
    let messageWrapper = $("<div/>", {
        "class": "message-row interviewBot-message"
    }).prependTo("#chat-message-list")

    let botmessageText = $("<div/>", {
        "class": "message-text",
        "text": bm
    }).appendTo(messageWrapper)
    let botMessage = $("<div/>", {
        "class": "name-display",
        "text": "interviewBot"
    }).appendTo(messageWrapper);
}
let logout = document.querySelector("a")
logout.addEventListener('click', (e) => {
       e.preventDefault();
        console.log("user Signed out")
    
       auth.signOut()

        
      
    
     });