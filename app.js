// find element
let leftAye = document.querySelector('leftAye')
let rightAye = document.querySelector('rightAye')
let userInput = document.querySelector('#userInput')
let passInput = document.querySelector('#passInput')

// default values left aye
let leftAyeTop = 75
let leftAyeLeft = 112
let leftAyePaddingLeft = 0
let leftAyePaddingright = 0

// default values right aye
let rightAyeTop = 75
let rightAyeLeft = 174
let rightAyePaddingLeft = 0
let rightAyePaddingright = 0

// define functions


// set events on userInput
userInput.addEventListener('focus', userInputFocus)
userInput.addEventListener('blur', userInputBlur)
userInput.addEventListener('keypress', userInputKeyHandler)

// set events on passInput
passInput.addEventListener('focus', passInputFocus)
passInput.addEventListener('blur', passInputBlur)