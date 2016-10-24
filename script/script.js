maxNumber = 69;
maxPowerball = 26;

function randomNumber(maxNumber) {
	return Math.ceil(Math.random()*maxNumber);
}
function randomPowerball(maxPowerball) {
	return Math.ceil(Math.random()*maxPowerball);
}

var tableGen;

var genButton = document.getElementById("genGridBtn");
genButton.onclick = function (e) {
	tableGen = "</br><table cellpadding='5' callspacing='5'><tr><th>Number1</th><th>Number 2</th><th>Number 3</th><th>Number 4</th><th>Number 5</th><th>Powerball Number</th></tr>";
	inputNo = parseInt(document.getElementById("inputNo").value);
	genOneTicket();
	checkNumbers();
	for(i=0;i<inputNo;i++){
		addToTable();
		genOneTicket();
		checkNumbers();
	}
	tableGen += "</table>";
	grid.innerHTML = tableGen;
}
function genOneTicket(){
	genNum1();
	genNum2();
	genNum3();
	genNum4();	
	genNum5();			
	genNumPB();
}

function checkNumbers(){
	if(number2 == number1 || number3 == number1 || number3 == number2 || number4 == number3 || number4 == number2 || number4 == number1 || number5 == number4 || number5 == number3 || number5 == number2 || number5 == number1){
		genOneTicket();
		checkNumbers();
	}
}

function genNum1(){number1 = randomNumber(maxNumber);}
function genNum2(){number2 = randomNumber(maxNumber);}
function genNum3(){number3 = randomNumber(maxNumber);}
function genNum4(){number4 = randomNumber(maxNumber);}
function genNum5(){number5 = randomNumber(maxNumber);}
function genNumPB(){powerballNum = randomPowerball(maxPowerball);}

function addToTable(){
	tableGen += "<tr><td>" + number1 + "</td><td>" + number2 + "</td><td>" + number3 + "</td><td>" + number4 + "</td><td>" + number5 + "</td><td class='redBox'>" + powerballNum + "</td></tr>"

}