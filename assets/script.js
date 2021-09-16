// Create function to develop planner. It needs:
// - interactive time block sections 
// - save button to save what you wrote to local storage 
// - color coded time blocks for past, current, future

var planner = document.querySelector(".container");
var save = document.querySelectorAll(".save-btn");
var task = document.getElementsByClassName(".input");
var time = document.getElementsByClassName(".hour");

var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm a"));

// save.addEventListener("click", function(event)) {
//     event.preventDefault(); }

// use event target to figure out which input is being clicked on

// Function to save to local storage using vanilla javascript and not table function
function saveTask(event) {
    console.log(event.target.previousElementSibling.value);
    var savedItems = {
        // hour: time,
        task: event.target.previousElementSibling.value,
    };

    localStorage.setItem("hourlyTask", JSON.stringify(savedItems));
    console.log(savedItems);
    getTask();
}

// Parsing JSON Hourly Task
function getTask() {
    console.log("Getting tasks");
    JSON.parse(localStorage.getItem("hourlyTask"))
}


save.forEach(element => {
    element.addEventListener("click", saveTask) 

});








// Color coding hours




// When the save button is clicked:
// saves the texts into local Storage
// grabs the text from local storage and sets it into the text field




// clear items after day ends 
// when time = 12.00 am, then Storage.removeItem(input);
