var error = 0;

function disable() {
	var submit = document.getElementById("submit");
	submit.disabled = true;
}

function onSubmit() {
	error = 0;
	checkName();
	checkPhone();
	checkEmail();
	if (error == 0) {
		submit.disabled = false;
	}
}

function checkName() {
	var name = document.getElementById("full-name").value;
	if (name == "") {
		document.getElementById("error1").hidden = false;
		error++;
	} else {
		document.getElementById("error1").hidden = true;
	}

}

function checkPhone() {
	var phone = document.getElementById("phone").value;
	let correctFormat = /^[0-9]{10}$/g;
	if (!correctFormat.test(phone)) {
		document.getElementById("error2").hidden = false;
		error++;
	} else {
		document.getElementById("error2").hidden = true;
		
	}
}

function checkEmail() {
	var email = document.getElementById("email").value;
	let correctFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
	if (!correctFormat.test(email)) {
		document.getElementById("error3").hidden = false;
		error++;
	} else {
		document.getElementById("error3").hidden = true;
	}
}