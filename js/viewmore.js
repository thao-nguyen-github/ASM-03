const btn1 = document.getElementById("btn-view-1");

btn1.addEventListener("click", show_hide1);

function show_hide1(){
if(btn1.textContent === "VIEW MORE") {
	btn1.textContent = "VIEW LESS";
	document.querySelector(".hidden1").classList.remove("hidden");
	}
	else{
		btn1.textContent = "VIEW MORE";
		document.querySelector(".hidden1").classList.add("hidden");
	}
}

const btn2 = document.getElementById("btn-view-2");

btn2.addEventListener("click", show_hide2);

function show_hide2(){	
	if(btn2.textContent === "VIEW MORE") {
	btn2.textContent = "VIEW LESS";
	document.querySelector(".hidden2").classList.remove("hidden");
	}
	else{
		btn2.textContent = "VIEW MORE";
		document.querySelector(".hidden2").classList.add("hidden");
	}
	}
const btn3 = document.getElementById("btn-view-3");

btn3.addEventListener("click", show_hide3);

function show_hide3(){	
	if(btn3.textContent === "VIEW MORE") {
	btn3.textContent = "VIEW LESS";
	document.querySelector(".hidden3").classList.remove("hidden");
	}
	else{
		btn3.textContent = "VIEW MORE";
		document.querySelector(".hidden3").classList.add("hidden");
	}
	}
const btn4 = document.getElementById("btn-view-4");

btn4.addEventListener("click", show_hide4);

function show_hide4(){	
	if(btn4.textContent === "VIEW MORE") {
	btn4.textContent = "VIEW LESS";
	document.querySelector(".hidden4").classList.remove("hidden");
	}
	else{
		btn4.textContent = "VIEW MORE";
		document.querySelector(".hidden4").classList.add("hidden");
	}
	}
const btn5 = document.getElementById("btn-view-5");

btn5.addEventListener("click", show_hide5);

function show_hide5(){	
	if(btn5.textContent === "VIEW MORE") {
	btn5.textContent = "VIEW LESS";
	document.querySelector(".hidden5").classList.remove("hidden");
	}
	else{
		btn5.textContent = "VIEW MORE";
		document.querySelector(".hidden5").classList.add("hidden");
	}
	}
const btn6 = document.getElementById("btn-view-6");

btn6.addEventListener("click", show_hide6);

function show_hide6(){	
	if(btn6.textContent === "VIEW MORE") {
	btn6.textContent = "VIEW LESS";
	document.querySelector(".hidden6").classList.remove("hidden");
	}
	else{
		btn6.textContent = "VIEW MORE";
		document.querySelector(".hidden6").classList.add("hidden");
	}
	}