var wholeContainer = document.createElement('div');
document.body.appendChild(wholeContainer);
var guessedWords = new Set();
var wrongWords = new Set();
var count = 0;

var word = ["python",
"javascript",
"mongodb",
"json",
"java",
"html",
"css",
"c",
"csharp",
"golang",
"kotlin",
"php",
"sql",
"ruby"];


var random = '';
var random= word[Math.floor(Math.random()*word.length)];
console.log(random);

var dashDiv = document.createElement('div');
dashDiv.classList.add('dashDiv');
wholeContainer.appendChild(dashDiv);

for (var i = 0; i<random.length; i++) {
    var letterDash = document.createElement('div');
    letterDash.classList.add('letterDash');    
    dashDiv.appendChild(letterDash);
}

var counter = 0;
var figures = document.querySelectorAll(".figure-part");
function displayFigureParts() {
  var part = Array.from(figures);
  part[counter].style.display = "block";
  counter++;
}

var wrongDiv = document.createElement('div');
wrongDiv.classList.add('wrongDiv');
wholeContainer.appendChild(wrongDiv);
var wrongTitle = document.createElement('h2');
wrongTitle.classList.add('wrongTitle');
wrongTitle.innerHTML = 'Wrong Letters';
wrongDiv.appendChild(wrongTitle);

var letters = document.querySelectorAll('.letterDash');

document.addEventListener("keydown", function (e) {
    var alreadyGuessed = document.getElementById('already-guessed');
    document.body.appendChild(alreadyGuessed);

    if( Array.from(guessedWords).includes(event.key)) {
            
        console.log(alreadyGuessed);
        alreadyGuessed.style.display = 'block';
        alreadyGuessed.innerHTML = event.key +" has already been guessed";
        
    } else {

        alreadyGuessed.style.display = 'none';
        guessedWords.add(event.key);
        if (random.includes(e.key)) {
            for (var j = 0; j < random.length; j++) {
                if (random[j] === e.key) {
                letters[j].innerHTML = e.key;
                checkWin();
          
        }
      }
    } else {
        checklost();
      displayFigureParts();
    var wrongLetterSpan = document.createElement('span');
    wrongLetterSpan.classList.add('wrongLetterSpan')
    wrongLetterSpan.innerHTML = e.key ;
    wrongDiv.appendChild(wrongLetterSpan);
    wrongWords.add(event.key);
    count = count + 1;
   console.log(count)
            } 
        }

});

var popUp = document.getElementById('pop-up');
var popUpMsg = document.getElementById('pop-up-message');
function checklost() {

    if (count===5) {
        console.log(count)
		popUpMsg.innerHTML = 'you lost!';
		popUp.style.display = 'block';
	}
}

function checkWin() {
	
	var valuedash = document.getElementsByClassName('letterDash');
	var what = Array.from(valuedash).every((box) => {
		return box.innerHTML ? true : false;
	});
	console.log(what);
	if (what) {
		popUpMsg.innerHTML = 'You Won!';
		popUp.style.display = 'block';
	}
}
