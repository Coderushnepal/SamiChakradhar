
var btnSubmit = document.getElementById("btn-submit");
var username = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

var errorUser = document.getElementById("errorUser");
var errorEmail = document.getElementById("errorEmail");
var errorPass = document.getElementById("errorPass");
var errorPass2 = document.getElementById("errorPass2");

btnSubmit.addEventListener('click', function(e) {	

	const userValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

  
		if(userValue === '' || userValue.length <= 3) 
		{
            // alert("hi")
			userName.style.border = "1px solid #e74c3c";				  
			errorUser.style.visibility = "visible";	
			errorUser.style.color = "#e74c3c";				
		} 
		else 
		{
			userName.style.border = "1px solid #2ecc71";							
			errorUser.style.visibility = "hidden";	
			errorUser.style.color = "#2ecc71";			
		}


		if(emailValue === '') 
		{
			email.style.border = "1px solid #e74c3c";				  
			errorEmail.style.visibility = "visible";	
			errorEmail.style.color = "#e74c3c";	
		} 
		else if(!isEmail(emailValue)) {
			email.style.border = "1px solid #e74c3c";				  
			errorEmail.style.visibility = "visible";	
			errorEmail.style.color = "#e74c3c";	
		}
		else 
		{
			email.style.border = "1px solid #2ecc71";							
			errorEmail.style.visibility = "hidden";	
			errorEmail.style.color = "#2ecc71";	
		}

		function isEmail(email) 
		{
			return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
		}



		if(passwordValue === '' || passwordValue.length <= 6) 
		{
			password.style.border = "1px solid #e74c3c";				  
			errorPass.style.visibility = "visible";	
			errorPass.style.color = "#e74c3c";	
		} 
		else 
		{
			password.style.border = "1px solid #2ecc71";				  
			errorPass.style.visibility = "hidden";	
			errorPass.style.color = "#2ecc71";	
		}
			
		if(password2Value === '' || password2Value.length <= 6) 
		{
			password2.style.border = "1px solid #e74c3c";				  
			errorPass2.style.visibility = "visible";	
			errorPass2.style.color = "#e74c3c";
		} 
		else if(passwordValue !== password2Value) 
		{
			password2.style.border = "1px solid #e74c3c";				  
			errorPass2.style.visibility = "visible";	
			errorPass2.style.color = "#e74c3c";
		} 
		else {
			password2.style.border = "1px solid #2ecc71";				  
			errorPass2.style.visibility = "hidden";	
			errorPass2.style.color = "#2ecc71";
		}
			
	
});