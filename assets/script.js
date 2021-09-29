// Create function to develop planner. It needs:
// - interactive time block sections 
// - save button to save what you wrote to local storage 
// - color coded time blocks for past, current, future

// Goal: Begin using jquery start below

// Tells the time and date
 var today = moment();
 $("#currentDay").text(today.format("MMMM Do YYYY, h:mm a"));

// Ready to go when the page loads
$(document).ready(function () {

// sets the texts into local Storage
    $(".save-btn").on("click", function(){
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    // Time tracking function
    function trackTime() {

        var currentTime = moment().hour();
        $(".time-block").each(function(){
            var timeBlocks = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlocks === currentTime) {
                $(this).addClass("present");

            }

            else if (timeBlocks < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
            }

            else {
                $(this).addClass("future");
                $(this).removeClass("present")
            }
        });
    }
    // Get items from local storage
trackTime();
});


