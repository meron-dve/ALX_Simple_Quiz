// Step 1: Function Declaration
function checkAnswer() {

    // Step 2: Identify the Correct Answer
    let correctAnswer = "4";

    // Step 3: Retrieve User's Answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If user clicks submit without selecting anything
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer first!";
        return;
    }

    let userAnswer = selectedOption.value;

    // Step 4: Compare User Answer with Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
