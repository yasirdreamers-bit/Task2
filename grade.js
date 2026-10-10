
var mark = document.querySelector("#mark");


function myGrade(){
	if(mark.value === ""){
		document.querySelector("#n1").innerHTML = "Empty! Please enter a mark.";
	}
	else if(mark.value >= 80 && mark.value<=100){
		document.querySelector("#n1").innerHTML = "Grade: A+<br>GPA: 5.00";
	}
	else if(mark.value >= 70 && mark.value<80){
		document.querySelector("#n1").innerHTML = "Grade: A<br>GPA: 4.00";	
	}
	else if(mark.value >= 60 && mark.value<70){
		document.querySelector("#n1").innerHTML = "Grade: A-<br>GPA: 3.50";	
	}
	else if(mark.value >= 50 && mark.value<60){
		document.querySelector("#n1").innerHTML = "Grade: B<br>GPA: 3.00";	
	}
	else if(mark.value >= 40 && mark.value<50){
		document.querySelector("#n1").innerHTML = "Grade: C<br>GPA: 2.50";	
	}
	else if(mark.value>=0 && mark.value <40){
		document.querySelector("#n1").innerHTML = "Grade: F<br>GPA: 0.00";	
	}
	else{
		document.querySelector("#n1").innerHTML = "Please enter a valid mark";
	}	
}
