var today = $("#currentDay");

today.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

var now = moment().hour();
console.log(now);

//Get element by Id

var timeColumn = document.getElementById("time-block");
console.log("timeColumn");

// 

var thingsToDo = document.getElementsByClassName("description");
console.log("thingsToDo");

//$(".saveBtn").click(function()
//{
  //  console.log($(this).attr(thingsToDo);
//});

$(document).ready(function () {
  $(".saveBtn").click(function () {
    //console.log("TEST2", 
    let txt = $
    (this).closest(".row").find('.decription').val()
  });
});

$(".saveBtn").click(function(){
    var thingsToDo = $(this).val();
    localStorage.setItem("description",JSON.stringify());
  
  });