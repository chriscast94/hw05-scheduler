// Create function to develop planner. It needs:
// - interactive time block sections 
// - save button to save what you wrote to local storage 
// - color coded time blocks for past, current, future


//---------Begining of code with wrong results -----------//
var planner = document.querySelectorAll(".container");
var save = document.querySelectorAll(".save-btn");
var task = document.querySelectorAll(".input");
var time = document.querySelectorAll(".hour");


var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm a"));

// save.addEventListener("click", function(event)) {
//     event.preventDefault(); }


// This code will not function properly with what I want to do

// Function to save to local storage using vanilla javascript and not table function
function saveTask(event) {
    console.log(event.target.previousElementSibling.value);
    var savedItems = {
        // use event target to figure out which input is being clicked on
        task: event.target.previousElementSibling.value,
    };
    localStorage.setItem("hourlyTask", JSON.stringify(savedItems));
    console.log(savedItems);
     if (task = "") {
         document.task.innerHTML = savedItems;
     } 
    getTask();
}

// Parsing JSON Hourly Task
function getTask(event) {
    console.log("Getting tasks");
    JSON.parse(localStorage.getItem("hourlyTask"));
    console.log(saveTask);
}


save.forEach(element => {
    element.addEventListener("click", saveTask)
});

//-----------End of code with wrong result--------------//


// Goal: Begin using jquery start below

// Tells the time and date

// var today = moment();
// $("#currentDay").text(today.format("MMMM Do YYYY, h:mm a"));

    // When the save button is clicked:

$(document).ready(function () {

// sets the texts into local Storage
    $(".save-btn").on("click", function(){
        var text = 
    });
    localStorage.setItem("task", text);
});





// grabs the text from local storage and sets it into the text field




// clear items after day ends 
// when time = 12.00 am, then Storage.removeItem(input);
