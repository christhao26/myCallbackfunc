// this is just the first example from the video//

// function taskOne(){
//     console.log("task 1")

// }

// function taskTwo(){
//     console.log("task 2")
// }

// setTimeout(taskOne, 2000);

// taskTwo();




// This is the second task in from the video// 

const message = function(){
    console.log("This message is shown after 3 seconds and was displayed after the 'btn clicked' function ")
} 

setTimeout(message, 3000);




// Below this is the last step from the video// 

document.querySelector("#callMe") .addEventListener("click", function(){
    console.log("The user has clicked the button!")


    
});