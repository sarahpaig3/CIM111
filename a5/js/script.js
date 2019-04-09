$(document).ready(function(){


	$("#logicButton").mouseover(function(){
		$("#logicButton").css("background-color", "gray")
	})


	$("h1").mouseleave(function(){
		$("button").css("background-color", "rgb(136, 41, 41)")
	})

	$(".sm").hide()


	$("#button1").click(function(){
		$("#text1").toggle(1000)
	})

	$("#button2").click(function(){
		$("#text2").toggle(1000)
	})
	$("#button3").click(function(){
		$("#text3").toggle(1000)
	})
	$("#button4").click(function(){
		$("#text4").toggle(1000)
	})
	$("#button5").click(function(){
		$("#text5").toggle(1000)
	})


	$("#visible").hide()


	var whatever = true

	$("#logicButton").click(function(){
		if(whatever == true){
			$("#visible").hide()
			whatever = false
			$("#logicButton").html("Show")
		}
		else{
			$("#visible").show()
			whatever = true
			$("#logicButton").html("Hide")
		}
	})


	var i;
	var skincare = ["Clinique", "Clarins", "Fresh", "L'oreal"]

	$("#brandsButton").click(function(){
		for (i = 0; i < skincare.length; i++){
			$("#brands").append(skincare[i] + "<br>")
		}
	})




})




