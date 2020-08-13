
var createform = document.getElementById("form");


var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Resigter with us ";
createform.appendChild(heading);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);



var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Username"; // Set Field Labels
createform.appendChild(namelabel);


var inputelement  = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("id", "userName");
inputelement.setAttribute("type", "text");
inputelement.setAttribute("placeholder", "username");
createform.appendChild(inputelement);

var errormsg = document.createElement("SMALL");
errormsg.setAttribute("id", "errorUser");
    errormsg.style.visibility = "hidden";    
    errormsg.innerHTML = "Username must be at least 3 characters";      
    createform.appendChild(errormsg);


var linebreak = document.createElement('br');
createform.appendChild(linebreak);


var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Email";
createform.appendChild(emaillabel);


// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "email");
emailelement.setAttribute("id", "email");
emailelement.setAttribute("placeholder", "Enter Email");
createform.appendChild(emailelement);

var erroremail = document.createElement("SMALL");  
    erroremail.style.visibility = "hidden"; 
    erroremail.setAttribute("id", "errorEmail"); 
    var txtEmail = document.createTextNode("Email is not valid");  
    erroremail.appendChild(txtEmail);
    createform.appendChild(erroremail); 

var linebreak = document.createElement('br');
createform.appendChild(linebreak);



var passwordlabel = document.createElement('label'); // label for password
passwordlabel.innerHTML = "password";
createform.appendChild(passwordlabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var passwordelement = document.createElement('input');
passwordelement.setAttribute("type", "password");
passwordelement.setAttribute("id", "password");
passwordelement.setAttribute("placeholder", "Enter Password");
createform.appendChild(passwordelement);


    var para = document.createElement("SMALL");
    para.style.visibility = "hidden";
    para.setAttribute("id", "errorPass"); 
    var txtPara = document.createTextNode("Password must be atleast 6 characters");  
    para.appendChild(txtPara);
    createform.appendChild(para); 

var linebreak = document.createElement('br');
createform.appendChild(linebreak);


   var confirmpwlabel = document.createElement('label'); // Append Textarea
confirmpwlabel.innerHTML = "Confirm password";
createform.appendChild(confirmpwlabel);

// this.linebreak;

var linebreak = document.createElement('br');
createform.appendChild(linebreak);


var passwordelement2 = document.createElement('input');
passwordelement2.setAttribute("type", "password");
passwordelement2.setAttribute("id", "password2");
passwordelement2.setAttribute("placeholder", "Confirm Password");
createform.appendChild(passwordelement2);


    var error2 = document.createElement("SMALL");    
    error2.style.visibility = "hidden"; 
    error2.setAttribute("id", "errorPass2"); 
    var txtParaPass2 = document.createTextNode("Password is required");  
    error2.appendChild(txtParaPass2);
    createform.appendChild(error2); 

    
var linebreak = document.createElement('br');
createform.appendChild(linebreak);


var btn = document.createElement("INPUT");
    btn.style.display = "block";
    btn.setAttribute("id", "btn-submit");
    btn.setAttribute("type", "submit");    
createform.appendChild(btn);