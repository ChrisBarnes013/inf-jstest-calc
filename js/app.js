// self executing main function
(function() {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------

var value1 = null;
var value2 = null;
var operand = null;
var total = null;
var output = 0;

var output = document.getElementById('output');


var button1 = document.getElementById('n1');

button1.addEventListener('click', function(){
	if (value1 === null){
		value1 = 1;	
	}
	else {
		value2 = 1;
	}
	
;
output.placeholder = 1;
	//console.log (button1.value);

});


var button2 = document.getElementById('n2');

button2.addEventListener('click', function(){
	if (value1 === null){
		value1 = 2;	
	}
	else {
		value2 = 2;
	}
	output.placeholder = 2;
	//console.log(button2.value);
	
});

var button3 = document.getElementById('n3');

button3.addEventListener('click', function(){
	if (value1 === null){
		value1 = 3;	
	}
	else {
		value2 = 3;
	}
	output.placeholder = 3;
	//console.log (button3.value);
});

var button4 = document.getElementById('n4');

button4.addEventListener('click', function(){
	if (value1 === null){
		value1 = 4;	
	}
	else {
		value2 = 4;
	}
	output.placeholder = 4;
	//console.log (button4.value);
});

var button5 = document.getElementById('n5');

button5.addEventListener('click', function(){
	if (value1 === null){
		value1 = 5;	
	}
	else {
		value2 = 5;
	}
	output.placeholder = 5;
	//console.log (button5.value);
});

var button6 = document.getElementById('n6');

button6.addEventListener('click', function(){
	if (value1 === null){
		value1 = 6;	
	}
	else {
		value2 = 6;
	}
	output.placeholder = 6;
	//console.log (button6.value);
});


var button7 = document.getElementById('n7');

button7.addEventListener('click', function(){
	if (value1 === null){
		value1 = 7;	
	}
	else {
		value2 = 7;
	}
	output.placeholder = 7;
	//console.log (button7.value);
});

var button8 = document.getElementById('n8');

button8.addEventListener('click', function(){
	if (value1 === null){
		value1 = 8;	
	}
	else {
		value2 = 8;
	}
	output.placeholder = 8;
	//console.log (button8.value);
});

var button9 = document.getElementById('n9');

button9.addEventListener('click', function(){
	if (value1 === null){
		value1 = 9;	
	}
	else {
		value2 = 9;
	}
	output.placeholder = 9;
	//console.log (button9.value);
});

var button0 = document.getElementById('n0');

button0.addEventListener('click', function(){
	if (value1 === null){
		value1 = 0;	
	}
	else {
		value2 = 0;
	}
	output.placeholder = 0;
	//console.log (button0.value);
});

var buttonminus = document.getElementById('ominus');

buttonminus.addEventListener('click', function(){
	operand = '-';
	output.placeholder = '-';
	//console.log (buttonminus.value);
});

var buttonplus = document.getElementById('oplus');

buttonplus.addEventListener('click', function(){
	operand = '+';
	output.placeholder = '+';
	//console.log (buttonplus.value);
});

var buttonmultiply = document.getElementById('omultiply');

buttonmultiply.addEventListener('click', function(){
	operand = 'x';
	output.placeholder = 'x';
	//console.log (buttonmultiply.value);

});


var buttonequals = document.getElementById('oequals');

buttonequals.addEventListener('click', function(){
	if (operand === '-'){
		total = value1 - value2;	
	};
	if (operand === '+'){
		total = value1 + value2;	
	};
	if (operand === 'x'){
		total = value1 * value2;	
	};
	output.placeholder = total;
	console.log(value1);
	console.log(operand);
	console.log(value2);
	console.log(total);
	console.log (buttonequals.value);


});

var buttonclear = document.getElementById('oclear');

buttonclear.addEventListener('click', function(){
	operand = null;
	value1 = null;
	value2 = null;
	total = null;
	output.placeholder = 0;
	console.log(value1);
	console.log(operand);
	console.log(value2);
	console.log(total);
});

 var output = document.getElementById('output');
 	

  // input field for the calculator screen
  var output = document.getElementById('output');

  // calculator button
  var bttn1 = document.querySelector('[name="bttn1"]');
})();
