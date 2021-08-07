// localstorage.getItem
// localstorage.setItem
$(document).ready(function () {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var hour = $("#" + key)
      .children(".description")
      .val(localStorage.getItem(key));
  }
});
//when planner is opened, current day is displayed at the top of calendar
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Then upon scroll down, I am presented with timeblocks for standard biz hours, done in CSS/HTML

//when timeblocks are viewed for that day, each timeblock is color coded to indicate whether is is in the future

$(".timeBlockText").each(function (timeColor) {
  var currentTime = moment().hours();
  var pastHour = parseInt($(this).parent().attr("id"));
  if (pastHour < currentTime) {
    $(this).addClass("past");
  } else if (pastHour === currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});

//event listener on save btns
//When I click into timeblock, then i can Enter and event
//When I click the save btn, then the text for that event is saved in local storage
//.(this) selector for save btns to store key/values entered in local storage
$(".saveBtn").on("click", function () {
  var userInput = $(this).siblings(".description").val();
  var userHour = $(this).parent().attr("id");
  //When i refresh the page, then the saved events persist (local storage)
  localStorage.setItem(userHour, userInput);
  $(".userSaved").text("Saved!");
  setTimeout(function () {
    $(".userSaved").text("");
  }, 2000);
});
// comment git commit issues
//commit issues still, missing commits
