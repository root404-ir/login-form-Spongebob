// Select the elements representing the eyes and input fields
let leftEye = document.querySelector('.leftEye');
let rightEye = document.querySelector('.rightEye');
let userInput = document.querySelector('#userInput');
let passInput = document.querySelector('#passInput');

// Default positioning and padding values for the left eye
let leftEyeTop = 75;
let leftEyeLeft = 112;
let leftEyePaddingLeft = 0;
let leftEyePaddingTop = 0;

// Default positioning and padding values for the right eye
let rightEyeTop = 75;
let rightEyeLeft = 174;
let rightEyePaddingLeft = 0;
let rightEyePaddingTop = 0;

// Initial values for resetting the eye positions and padding to defaults
let initialLeftEyeTop = 75;
let initialLeftEyeLeft = 112;
let initialRightEyeTop = 75;
let initialRightEyeLeft = 174;
let initialPaddingLeft = 0;
let initialPaddingTop = 0;

// Function to animate the eyes when the user focuses on the username input
const userInputFocus = () => {
    // Create an interval to move the eyes upward and inward while typing
    let eyeInterval = setInterval(() => {
        // Stop the animation when the padding top reaches the limit (8px)
        if (leftEyePaddingTop >= 8) {
            clearInterval(eyeInterval);
        }
        // Adjust left eye position and padding
        leftEye.style.paddingTop = leftEyePaddingTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';

        // Adjust right eye position and padding
        rightEye.style.paddingTop = rightEyePaddingTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        // Increment padding and move eyes closer to the center
        leftEyePaddingTop++;
        leftEyeLeft--;

        rightEyePaddingTop++;
        rightEyeLeft--;
    }, 20);  // The interval runs every 20 milliseconds for smooth animation
};

// Function to animate the eyes when the user exits the username input (blur)
const userInputBlur = () => {
    // Create an interval to reset the eyes to their original position
    let eyeInterval = setInterval(() => {
        // Stop the animation when the padding top reaches the default (0px)
        if (leftEyePaddingTop <= 0) {
            clearInterval(eyeInterval);
        }
        // Reset left eye position and padding
        leftEye.style.paddingTop = leftEyePaddingTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';

        // Reset right eye position and padding
        rightEye.style.paddingTop = rightEyePaddingTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        // Decrement padding and move eyes back to original position
        leftEyePaddingTop--;
        leftEyeLeft++;

        rightEyePaddingTop--;
        rightEyeLeft++;
    }, 20);

    // Reset paddingLeft to initial values after blur
    leftEyePaddingLeft = initialPaddingLeft;
    rightEyePaddingLeft = initialPaddingLeft;
    leftEye.style.paddingLeft = leftEyePaddingLeft + 'px';
    rightEye.style.paddingLeft = rightEyePaddingLeft + 'px';
};

// Function to handle key presses in the username input field
const userInputKeyHandler = (event) => {
    // Check if the pressed key is backspace (keyCode 8) and move eyes backward
    if (event.keyCode === 8 && leftEyePaddingLeft > 0) {
        leftEyePaddingLeft--;
        rightEyePaddingLeft--;
    } 
    // Otherwise, move the eyes forward as the user types
    else if (leftEyePaddingLeft < 18) {  // Ensure the paddingLeft doesn't exceed 18px
        leftEyePaddingLeft++;
        rightEyePaddingLeft++;
    }

    // Apply the updated padding to both eyes
    leftEye.style.paddingLeft = leftEyePaddingLeft + 'px';
    rightEye.style.paddingLeft = rightEyePaddingLeft + 'px';
};

// Function to animate the eyes when the user focuses on the password input
const passInputFocus = () => {
    // Create an interval to move the eyes upward when focusing on the password field
    let interval = setInterval(() => {
        // Stop the animation when the top value reaches 60px
        if (leftEyeTop <= 60) {
            clearInterval(interval);
        }
        // Move left eye upward
        leftEye.style.top = leftEyeTop + 'px';
        leftEyeTop--;

        // Move right eye upward
        rightEye.style.top = rightEyeTop + 'px';
        rightEyeTop--;
    }, 20);  // The interval runs every 20 milliseconds
};

// Function to reset the eyes when the user exits the password input (blur)
const passInputBlur = () => {
    // Create an interval to reset the eyes to their original position (75px)
    let interval = setInterval(() => {
        if (leftEyeTop >= 75) {
            clearInterval(interval);
        }
        // Reset left eye position
        leftEye.style.top = leftEyeTop + 'px';
        leftEyeTop++;

        // Reset right eye position
        rightEye.style.top = rightEyeTop + 'px';
        rightEyeTop++;
    }, 20);
};

// Attach event listeners to the username input field
userInput.addEventListener('focus', userInputFocus);  // Trigger animation on focus
userInput.addEventListener('blur', userInputBlur);  // Reset animation on blur
userInput.addEventListener('keydown', userInputKeyHandler);  // Handle key presses

// Attach event listeners to the password input field
passInput.addEventListener('focus', passInputFocus);  // Trigger animation on focus
passInput.addEventListener('blur', passInputBlur);  // Reset animation on blur
