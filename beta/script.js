document.getElementById("betas").style.display="none";

function CheckPassword() {
	let pass = document.getElementById("pass");
	if (pass.value=="hgcrq") { document.getElementById("betas").style.display="block"; pass.value=""; }
}
