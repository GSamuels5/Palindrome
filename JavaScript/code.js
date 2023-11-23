/*
=== String challenge ====
Palindrome: a word, phrase, or sequence that reads the same backward as forwards, e.g. madam
- Create a repo called a palindrome.
- Open your cloned repo into a VS code
- Create a function called isPalindrome that will take a single parameter and return a string value.
The output should look like: madam is a palindrome if the user passes madam as an argument.
NB: When creating a function, we refer to the variable between the parenthesis as a parameter.
When we call or invoke a function, we refer to it as an argument.
*/
let outputElem = document.querySelector('label')

let btnELem = document.querySelector('button')

function isPalindrome() {
    let inputElem = document.querySelector('input').value
    let equalCase = inputElem.toLowerCase()
    let newArray = equalCase.split("").reverse().join("")
    if (inputElem == newArray ) {
       outputElem.innerHTML = `${newArray} is a palindrome`;
    } else {
       outputElem.innerHTML = `${newArray} is not palindrome`;
    }
}
btnELem.addEventListener('click',isPalindrome)
