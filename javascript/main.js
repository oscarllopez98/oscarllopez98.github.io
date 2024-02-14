//On page load, fade in body content
$(document).ready(function() {
  $("#about").hide().fadeIn(2000,"swing");
  console.log(window.getComputedStyle(document.getElementById("about")).display);
});

$("#about-nav").click(function (){
  flipDisplay("about");
});
$("#portfolio-nav").click(function (){
  flipDisplay("portfolio");
});
$("#contact-nav").click(function (){
  flipDisplay("contact");
});
$("#resume-nav").click(function (){
  flipDisplay("resume");
});

$("#email-button").click(function (){
    /* Get the text field */
    var copyText = document.getElementById("email");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied to Clipboard!");
});

function flipDisplay(id){

  //Check for which element to hide
  if (window.getComputedStyle(document.getElementById("about")).display == "block"){
    if (!(id === "about"))
      $("#about").fadeOut(1000,"swing");
  }
  else if (window.getComputedStyle(document.getElementById("portfolio")).display == "block"){
    if (!(id === "portfolio")){
      $("#portfolio").fadeOut(1000,"swing");
    }
    else return;
  }
  else if (window.getComputedStyle(document.getElementById("contact")).display == "block"){
    if (!(id === "contact")){
      $("#contact").fadeOut(1000,"swing");
    }
    else return;
  }
  else if (window.getComputedStyle(document.getElementById("resume")).display == "block") {
    if (!(id === "resume")){
      $("#resume").fadeOut(1000,"swing");
    }
    else return;
  }
  else {
    console.log("No Element ID Found");
  }

  //id param is the id for the element to make visible
  $("#"+id).delay(1500).fadeIn(2000,"swing");
}
