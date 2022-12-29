const submit_btn = document.getElementById("submit-btn");
const form_info = document.getElementById("enter-form");
const personal_info = document.querySelector(".info");
const social_icon = document.querySelector(".social-icons");
const input = document.getElementById("enter-email");

submit_btn.addEventListener("click", showInfo);

const regex1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function showInfo() {
	if(!regex.test(input.value)) {
		alert("Địa chỉ email không hợp lệ!");
		input.focus;
		
}
else{
		event.preventDefault();
		form_info.style.display = "none";
		personal_info.style.display = "block";
		social_icon.style.display = "flex";
	
}
}