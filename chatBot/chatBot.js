let chat = document.querySelector("input1");


$("#submit").click(function(){
    let userInput = $("#chat").val().toLowerCase();
    let questions = interviewQuestions.questions;
    let question  =  questions[5];
    $("#chat").val("")
    if(userInput == "yes"){
        youMessage(userInput);
        botMessage("Type in an occupation number to practice. 1: Automotive Engineer. 2: Plumber. 3: Software Engineer");
    }
    else if(userInput == 1){
        botMessage(question.question)
    }
    else{
        console.log(question.answer);
        console.log(userInput);
        checkValidity(userInput, question.answer.toLowerCase());
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
