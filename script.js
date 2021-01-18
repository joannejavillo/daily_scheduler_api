var today = $("#currentDay");

today.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

var now = moment().hour();
console.log(now);

//Get element by Id

var timeColumn = $(".time-block");
console.log("timeColumn");

// 

var thingsToDo = $(".description");
console.log("thingsToDo");

//$(".saveBtn").click(function()
//{
  //  console.log($(this).attr(thingsToDo);
//});

$(document).ready(function () {
  $(".saveBtn").click(function () {
    //console.log("TEST2", 
    let txt = $
    (this).closest(".row").find('.description').val()
  });
});

$(".saveBtn").click(function(){
    var thingsToDo = $(this).closest(".row").find("textarea").val();
    localStorage.setItem("description",JSON.stringify());
  console.log(thingsToDo);
  });


  