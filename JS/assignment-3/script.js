
document.getElementById("eye").addEventListener("click", function(e){
	var passw = document.getElementById("passw");
	if(passw.getAttribute("type")=="password"){
		passw.setAttribute("type","text");
	} else {
		passw.setAttribute("type","password");
	}
});

