// Create function to develop planner. It needs:
// - interactive time block sections 
// - save button to save what you wrote to local storage 
// - color coded time blocks for past, current, future

// Goal: Begin using jquery start below

// Tells the time and date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(today);

// Ready to go when the page loads
$(document).ready(function () {

    // sets the texts into local Storage
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

    var currentTime = moment().hours();
    $(".time-block").each(function () {
        var timeBlocks = parseInt($(this).attr("id"));
          console.log(this);

        if (timeBlocks === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("present")
            console.log(timeBlocks);
        }

        else if (timeBlocks < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }

        else {
            $(this).addClass("future");
        }
    });
}

// Grab items from local storage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));
$("#6pm .description").val(localStorage.getItem("6pm"));
$("#7pm .description").val(localStorage.getItem("7pm"));
$("#8pm .description").val(localStorage.getItem("8pm"));
$("#9pm .description").val(localStorage.getItem("9pm"));

colorTime();


