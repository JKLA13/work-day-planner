$(document).ready(function () {
  //pseudo code
  // declare variables
  //create functions
  $();
});

//when planner is opened, current day is displayed at the top of calendar
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Then upon scroll down, I am presented with timeblocks for standard biz hours, done in CSS/HTML

//when timeblocks are viewed for that day, each timebloc is color coded to indicate whether is is in the future

//When I click into timeblock, then i Enter and event

//When I slick the save btn, then the text for that event is saved in loacl stoarge

//When i refresh the page, then the saved events persist (local storage)

//Things to research on jQuery documentation site
// .Each (loop) for class time block - local storage grab
// .siblings
// .parent.attr $(this) selector
// .addClass and .removeClass -

// localstorage.getItem
// localstorage.setItem

//comment can use from jQuery documentation

//event listener on save btns

//.(this) selector for save btns to store key/values entered in local storage

//moment().get/set
