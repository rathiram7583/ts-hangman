var myForm = document.querySelector("#hangman");
var letter = document.querySelector("#letter");
var answer = document.querySelector("#hangman p");
var wrongAnswer = document.querySelector("#hangman strong ");
var counter = document.querySelector("#hangman h5");
console.log(myForm);
console.log(letter);
console.log(answer);
console.log(wrongAnswer);
console.log(counter);
var words = ["JAVA", "NODE", "HTML", "CSS", "REACT", "BOOT", "SAW", "ROAD"];
var randomWords = words[Math.floor((Math.random() * words.length))];
var answerCheck = [];
var count = 0;
function createWords() {
    for (var i = 0; i < randomWords.length; i++) {
        answerCheck[i] = "_";
    }
    this.answer.innerHTML += this.answerCheck.join(" ");
}
this.createWords();
function letterCheck() {
    var inputValue = this.letter.value;
    console.log(inputValue);
    if (inputValue.length > 0) {
        for (var i = 0; i < this.randomWords.length; i++) {
            if (randomWords[i] == inputValue) {
                answerCheck[i] = inputValue;
                console.log(answerCheck);
            }
            else {
                this.wrongAnswer.innerHTML = "Wrong Answer";
            }
        }
        count++;
        this.answer.textContent = answerCheck.join("");
        this.counter.innerHTML = "No Of Clicks" + count;
    }
}
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    letterCheck();
});
