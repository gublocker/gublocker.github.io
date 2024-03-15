document.getElementById("betas").style.display="none";

debug=false;

if (debug) autoLogin();

function CheckPassword() {
	let pass = document.getElementById("pass");
	if (pass.value=="hgcrq") { document.getElementById("betas").style.display="block"; pass.value=""; }
}

function autoLogin() {
	document.getElementById("betas").style.display="block"; 
	pass.value="DO NOT COMMIT";
}

function LoadURL(url) {
	document.getElementById("loader").src = `${url}`;
}
