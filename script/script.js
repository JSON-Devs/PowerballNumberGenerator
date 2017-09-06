var maxNumber = 69;
var maxPowerball = 26;
var tableGen;
var tickets = [];

var genButton = document.getElementById("genGridBtn");
genButton.onclick = function (e) {
	grid.innerHTML = "";
	inputNumber = parseInt(document.getElementById("inputNo").value);
	if(inputNumber > 0){
		errorMessage.innerHTML = "";
		tableGen = "</br><table cellpadding='5' callspacing='5' class='table table-bordered'><tr>" +
			"<th>Number1</th><th>Number 2</th><th>Number 3</th><th>Number 4</th><th>Number 5</th>" +
			"<th>Powerball Number</th></tr>";
		initializeTicketArray();
		generateTicket(inputNumber);
		generateTable()
		tableGen += "</table>";
		grid.innerHTML = tableGen;
	}
	else{
		errorMessage.innerHTML = "Please enter a number greater than 0";
	}

}

function initializeTicketArray() {
	for(var i = 0; i < inputNumber; i++){
		for(var j = 0; j < 6; j++){
			tickets.push([i, 0]);
		}
	}
}

function generateTicket(inputNumber){
	for(var i = 0; i < inputNumber; i++){
		for(var j = 0; j < 5; j++){
			tickets[i][j] = getNumber(maxNumber);
			checkTicket(tickets[i], i, j);
		}
		tickets[i][5] = getPowerball(maxPowerball);
	}
}

function checkTicket(ticket, i, j) {
	for(var k = 0; k < 5; k++){
		if(ticket[j] == ticket[k] && j != k){
			tickets[i][j] = getNumber(maxNumber);
			checkTicket(tickets[i], i, j);
		}
	}
}

function getNumber(maxNumber) {
	return Math.ceil(Math.random()*maxNumber);
}

function getPowerball(maxPowerball) {
	return Math.ceil(Math.random()*maxPowerball);
}

function generateTable(){
	for(var i = 0; i < inputNumber; i++){
		tableGen += "<tr>";
		for(var j = 0; j < 5; j++){
			tableGen += "<td>" + tickets[i][j] + "</td>";
		}
		tableGen += "<td class='redBox'>" + tickets[i][5]+ "</td></tr>";
	}

}