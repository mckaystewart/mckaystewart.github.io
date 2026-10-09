$(document).ready(function(){
/*
$("#button").click(function() {


var number = $("input[name='bname1']").val();


var name = $("input[name='bname2']").val();


if (name == ''|| number == '' ) {





$(".balloon").css("visibility","hidden");


if(number == ''){
$("#riballoon1").css("visibility","visible");
}


if(name == ''){
$("#riballoon").css("visibility","visible");
}










} 

else {



$(".balloon").css("visibility","hidden");

$.post( "rsvpform.php", {
number1: number,

name1: name,

}, function(data) {

if(data=="00"){

alert("Your message is sent!");

}
else{



if(data.search(1)!=-1){

$("#riballoon3").css("visibility","visible");

}

if(data.search(2)!=-1){

$("#riballoon2").css("visibility","visible");

}




}


 
});
}
});

*/


$("#button2").click(function() {


var request= $("select[name='selectrsvp'] option:selected").val();



var fname=$("input[name='name1']").val();

var lname=$("input[name='name2']").val();

var company=$("input[name='name3']").val();


var email=$("input[name='name4']").val();


var phone=$("input[name='name5']").val();

var guests= $("select[name='selectrsvp2'] option:selected").val();


var info= $("textarea[name='special2']").val();

if(document.getElementById("myCheck").checked){
var checkbox="Checked:I would like to be considered for future events";
}
else{
var checkbox="Unchecked:I would like to be considered for future events";
}

//var instruct=$("input[name='name6']").val();



if (fname == ''|| lname == ''|| company == ''|| email == ''|| phone == '' ) {
//alert("Insertion Failed Some Fields are Blank....!!");


$(".balloon").css("visibility","hidden");


if(fname == ''){
$("#balloon3").css("visibility","visible");
}


if(lname == ''){
$("#balloon2").css("visibility","visible");
}


if(phone == ''){
$("#balloon5").css("visibility","visible");
}



if(company == ''){
$("#balloon4").css("visibility","visible");
}



if(email == ''){
$("#balloon1").css("visibility","visible");
}






} 

else {

$(".balloon").css("visibility","hidden");

$.post( "riform.php", {

request1: request,

fname1: fname,

lname1: lname,

company1: company,

email1: email,

phone1: phone,

guests1: guests,

info1: info,

checkbox1:checkbox,




}, function(data) {


if(data=="0000"){

//alert("RSVP sent!");

alertify.alert("RSVP sent!");


$("input[name='name1']").val("");

$("input[name='name2']").val("");

$("input[name='name3']").val("");


$("input[name='name4']").val("");


$("input[name='name5']").val("");


$("textarea[name='special2']").val("");

}
else{



//$(".balloon").css("visibility","hidden");


if(data.search(1)!=-1){

$("#balloon7").css("visibility","visible");

}

if(data.search(2)!=-1){

$("#balloon8").css("visibility","visible");

}

if(data.search(3)!=-1){

$("#balloon9").css("visibility","visible");

}
if(data.search(4)!=-1){

$("#balloon10").css("visibility","visible");

}




}







 
});
}










});







$("#button3").click(function() {


var type= $("select[name='conselect'] option:selected").val();


var fname=$("input[name='cname1']").val();

var lname=$("input[name='cname2']").val();

var company=$("input[name='cname3']").val();


//var title=$("input[name='cname4']").val();


var phone=$("input[name='cname5']").val();

var email= $("input[name='cname6']").val();

var subject=$("input[name='cname7']").val();


var info= $("textarea[name='special3']").val();






if (fname == ''|| lname == ''|| email == ''|| subject == ''|| phone == '' ) {
//alert("Insertion Failed Some Fields are Blank....!!");


$(".balloon").css("visibility","hidden");


if(fname == ''){
$("#conballoon3").css("visibility","visible");
}


if(lname == ''){
$("#conballoon1").css("visibility","visible");
}


if(phone == ''){
$("#conballoon4").css("visibility","visible");
}



if(email == ''){
$("#conballoon2").css("visibility","visible");
}



if(subject == ''){
$("#conballoon5").css("visibility","visible");
}





} 

else {

$(".balloon").css("visibility","hidden");

$.post( "contactform.php", {



fname1: fname,

lname1: lname,

company1: company,


phone1: phone,

email1: email,

info1: info,

subject1: subject,




}, function(data) {



if(data=="0000"){

//alert("Message sent!");

alertify.alert("Message sent!");


$("input[name='cname1']").val("");

$("input[name='cname2']").val("");

$("input[name='cname3']").val("");

$("input[name='cname5']").val("");

$("input[name='cname6']").val("");

$("input[name='cname7']").val("");

$("textarea[name='special3']").val("");



}
else{



//$(".balloon").css("visibility","hidden");


if(data.search(1)!=-1){

$("#conballoon6").css("visibility","visible");

}

if(data.search(2)!=-1){

$("#conballoon7").css("visibility","visible");

}

if(data.search(3)!=-1){

$("#conballoon8").css("visibility","visible");

}

if(data.search(4)!=-1){

$("#conballoon9").css("visibility","visible");

}



}







 
});
}










});











});