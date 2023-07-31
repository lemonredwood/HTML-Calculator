display = $("#display")


$(".number").click(function(){
    display.append($(this).text())
    history.append($(this).text())
    console.log("Number stored")
  });
$(".operator").click(function(){
    display.append($(this).attr("value"))
    console.log("Operator stored")
});

$("#equals").click(function(){
    display.text(eval(display.text()));
    console.log("Answer generated")
})
$("#clear").click(function(){
    display.text("");
    console.log("Screen cleared")
})
$("#del").click(function(){
    display.text(display.text().slice(0,-1));
    console.log("Last element deleted")
})

