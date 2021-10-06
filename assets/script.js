// Create function to develop planner. It needs:
// - interactive time block sections 
// - save button to save what you wrote to local storage 
// - color coded time blocks for past, current, future

// Tells the time and date Manupulate currentTime (change from military to?) or shorten calendar to someething that's not greater than 6 pm
var currentTime = moment().hours();
console.log(currentTime);

var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(today);

// Ready to go when the page loads
$(document).ready(function () {

    // sets the texts into local Storage, with the name of the timeblock they were submitted in
    function saveTask() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    };
    $(".saveBtn").on("click", saveTask);
    // $(".saveBtn").on("keypress", saveTask);

});

//Function to color past/present/future time insert slots
function colorTime() {

    $(".time-block").each(function () {
        var timeBlocks = parseInt($(this).attr("id"));
        console.log(this);
        // if (currentTime > 12) {
        //     timeBlocks = timeBlocks + 12;
  
        // }

        // if (currentTime < 12) {
        //     currentTime = currentTime - 12;
        // }

        if (timeBlocks < currentTime) {
         
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
            console.log("(timeblocks < currentTime");
            console.log("timeblock is ", timeBlocks);
            console.log("currentTime is", currentTime);
        }

        else if (timeBlocks === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
            console.log("(timeblocks === currentTime");
            console.log("timeblock is ", timeBlocks);
            console.log("currentTime is", currentTime);
        }

        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
            console.log("(timeblocks > currentTime");
            console.log("timeblock is ", timeBlocks);
            console.log("currentTime is", currentTime);
        }
    });
}

// Grab items from local storage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#13pm .description").val(localStorage.getItem("13pm"));
$("#14pm .description").val(localStorage.getItem("14pm"));
$("#15pm .description").val(localStorage.getItem("15pm"));
$("#16pm .description").val(localStorage.getItem("16pm"));
$("#17pm .description").val(localStorage.getItem("17pm"));
$("#18pm .description").val(localStorage.getItem("18pm"));
$("#19pm .description").val(localStorage.getItem("19pm"));
$("#20pm .description").val(localStorage.getItem("20pm"));
$("#21pm .description").val(localStorage.getItem("21pm"));

colorTime();


