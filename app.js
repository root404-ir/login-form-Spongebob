// find element
let leftEye = document.querySelector('.leftEye')
let rightEye = document.querySelector('.rightEye')
let userInput = document.querySelector('#userInput')
let passInput = document.querySelector('#passInput')

// default values left aye
let leftEyeTop = 75
let leftEyeLeft = 112
let leftEyePaddingLeft = 0
let leftEyePaddingright = 0

// default values right aye
let rightEyeTop = 75
let rightEyeLeft = 174
let rightEyePaddingLeft = 0
let rightEyePaddingright = 0

// define functions


const userInputFocus = () => {

}

const userInputBlur = () => {

}

const userInputKeyHandler = (e) => {

}

const passInputFocus = () => {
    let Interval = setInterval(() => {
        if (leftEyeTop === 60) {
            clearInterval(Interval)
        }
        leftEye.style.top = leftEyeTop + "px"
        leftEyeTop--
        rightEye.style.top = rightEyeTop + "px"
        rightEyeTop--
    }, 20)
}

const passInputBlur = () => {
    let Interval = setInterval(() => {
        if (leftEyeTop === 75) {
            clearInterval(Interval)
        }
        leftEye.style.top = leftEyeTop + "px"
        leftEyeTop++
        rightEye.style.top = rightEyeTop + "px"
        rightEyeTop++
    }, 20)
}


// set events on userInput
userInput.addEventListener('focus', userInputFocus)
userInput.addEventListener('blur', userInputBlur)
userInput.addEventListener('keypress', userInputKeyHandler)

// set events on passInput
passInput.addEventListener('focus', passInputFocus)
passInput.addEventListener('blur', passInputBlur)