function validate(){
	var uname_value=document.getElementById("uname").value;
	var feedback="";
	
	if (uname_value.length<8){
	    feedback="User name must be at least 8 characters long."
		$("#uname")[0].setCustomValidity(feedback);
		$("#feedback").text(feedback);
	}else {
	    $ ("#uname")[0].setCustomValidity("")
	}
	
	var password_val=document.getElementById("pwd").value;
	var feedback_p="";
	
	if (password_val.length<8){
	    feedback_p="Password must be at least 8 characters long."
		$("#pwd")[0].setCustomValidity(feedback_p);
		$("#feedback_p").text(feedback_p);
	} else{
		$("#pwd")[0].setCustomValidity("")
	}
	
	$("form").addClass("was-validated");
}


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}