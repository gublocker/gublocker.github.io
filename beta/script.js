document.getElementById("betas").style.display="none";

debug=true;

if (debug) autoLogin();

let showpass = document.getElementById("show")
let entered = document.getElementById("entered")

entered.style.display="none";

showpass.addEventListener("mouseenter", function (e) {
	document.getElementById("pass").style.color="#000";
},false);

showpass.addEventListener("mouseleave", function (e) {
	document.getElementById("pass").style.color="#fff";
},false);

function CheckPassword() {
	let pass = document.getElementById("pass");
	if (pass.value=="hgcrq") { document.getElementById("betas").style.display="block"; document.getElementById("password-enter").style.display="none"; }
	else { entered.style.display="block"; document.getElementById("entered-pass").innerHTML=pass.value; }
	pass.value="";
}

function autoLogin() {
	document.getElementById("betas").style.display="block"; 
	pass.style.color = "#000";
	pass.value="DO NOT COMMIT";
}

function LoadURL(url) {
	document.getElementById("loader").src = `${url}`;
}
