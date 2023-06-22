// 1
function checkForm1 (el)
{
	var per = document.getElementById('11').value;
	if (per < 15)
	{
		console.log ("Числовая переменная < 15 ");
	}
	else if (per == 15)
	{
		console.log ("Числовая переменная = 15 ");
	}
	else
	{
		console.log ("Числовая переменная > 15 ");
	}
	return false;
}
// 2
function checkZodiac(){
    let zodiac = document.getElementById("zodiac").value;
    
    switch(zodiac){
    case "Козерог":
        alert("Привет, Козерог!");
        break;
    case "Рыбы":
        alert("Привет, Рыбы!");
        break;
    case "Овен":
        alert("Привет, Овен!");
        break;
    case "Телец":
        alert("Привет, Телец!");
        break;
    case "Близнецы":
        alert("Привет, Близнецы!");
        break;
    case "Рак":
        alert("Привет, Рак!");
        break;
    case "Лев":
        alert("Привет, Лев!");
        break;
    case "Дева":
        alert("Привет, Дева!");
        break;
    case "Весы":
        alert("Привет, Весы!");
        break;
    case "Скорпион":
        alert("Привет, Скорпион!");
        break;
    case "Стрелец":
        alert("Привет, Стрелец!");
        break;
    case "Водолей":
        alert("Привет, Водолей!");
        break;
    default:
        alert("Я не знаю такого знака зодиака :(");
    }
}
// 3
function loopFor(){
    let list = document.getElementById("list");
    list.innerHTML = "";
    for(let i = 1; i <= 40; i++){
    let listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
    }
}

function loopWhile(){
    let list = document.getElementById("list");
    list.innerHTML = "";
    let i = 1;
    while(i <= 40){
    let listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
    i++;
    }
}

function loopDoWhile(){
    let list = document.getElementById("list");
    list.innerHTML = "";
    let i = 1;
    do{
    let listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
    i++;
    }while(i <= 40);
}
// 4
function virus(from, to) {
let current = from;

let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
    clearInterval(timerId);
    }
    current++;
}, 1000);
}

// 5
function checkNumber(){
    let number = document.getElementById("number").value;
    
    if(number > 5){
    alert("Поздравляем! Вы ввели правильное число: " + number);
    }else if(number !== ""){
    let newNumber = confirm("Вы ввели неправильное число. Введите число больше 5: ");
    checkNumber(newNumber);
    }
}

// 6
var evenNumbers = "";
for (var i = 8; i <= 20; i += 2) {
 evenNumbers += i + " ";
}
document.getElementById("even-numbers").innerHTML = "<div class='even'>" + evenNumbers + "</div>";

// 7
var oddNumbers = "";
for (var i = 1; i <= 7; i += 2) {
if (i == 5) {
    continue;
}
oddNumbers += i + " ";
}
document.getElementById("odd-numbers").innerHTML = "<div class='odd'>" + oddNumbers + "</div>";

