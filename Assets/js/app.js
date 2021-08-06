$(document).ready(function () {});
//when planner is opened, current day is displayed at the top of calendar
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Then upon scroll down, I am presented with timeblocks for standard biz hours, done in CSS/HTML

//when timeblocks are viewed for that day, each timeblock is color coded to indicate whether is is in the future

$(".time-block").each(function (timeColor) {
  var currentTime = moment().hours();
  var pastHour = parseInt($this).attr("id").split("-")[1];
  if (pastHour < currentTime) {
    $(this).addClass("past");
  } else if (pastHour === currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  }
});
timeColor();

//event listener on save btns
//When I click into timeblock, then i can Enter and event
//When I click the save btn, then the text for that event is saved in local storage
//.(this) selector for save btns to store key/values entered in local storage
$(".saveBtn").moment("click", function () {
  var userKey = $(this).siblings(".description").val();
  var userHour = $(this).parent().attr("id");
  //When i refresh the page, then the saved events persist (local storage)
  localStorage.setItem(userKey, userHour);

  localStorage.getItem(userKey, userHour);
  console.localStorage();
});

//Things to research on jQuery documentation site
// .Each (loop) for class time block - local storage grab
// .siblings
// .parent.attr $(this) selector
// .addClass and .removeClass -

// localstorage.getItem
// localstorage.setItem

//comment can use from jQuery documentation