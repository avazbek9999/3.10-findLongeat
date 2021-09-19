
//yaxlitlaydigan va pilusga o'giradigan funcsiya================

var numbers = [0, -54, 5.7, 8.9, -2.5];

function nprmilizeNamber(arrs) {
    var result = [];

    for (var arr of arrs) {
        if (arr < 0) {
        result.push(Math.round(arr * -1));  
        } else {
            result.push(Math.round(arr));
        }
         
    }
    
    return result
}

console.log(nprmilizeNamber(numbers));

//long word exs=============================================

//select elements

var elForm = document.querySelector('.form');
var elInput = elForm.querySelector('.input');
var elResultBox = elForm.querySelector('.result-box');

function findLongest(text) {
    var words = text.split(' ') 
    var result = '';

    for (var word of words) {
        if (word.length > result.length) {
            result = word;
        }
    }

    return result;

};

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var userInput = elInput.value.trim()
    elResultBox.textContent ='Natija: ' + findLongest(userInput);
});


//hisoblab beruvchi funcksiya============= 

var anyNamber = [3, 4, 6, 7.8,-6];

function total(numbers) {
    var result = 0;

    for (var nam of numbers) {
        result = result + Math.round(nam);
    }
    return result;
}

console.log(total(anyNamber));


