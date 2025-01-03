


const quotes = [
    "Believe in yourself and all that you are!",
    "The only bad workout is the one that didn’t happen.",
    "You are capable of amazing things!",
    "Take care of your body. It’s the only place you have to live.",
    "Stay positive, work hard, and make it happen!",
    "The future depends on what you do today.",
    "Don’t limit your challenges. Challenge your limits.",
    "A little progress each day adds up to big results.",
    "Your body can stand almost anything. It’s your mind you have to convince.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Fitness is not about being better than someone else. It’s about being better than you used to be.",
    "You don’t have to be extreme, just consistent.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "What seems impossible today will one day become your warm-up.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Every journey begins with a single step.",
    "Discipline is the bridge between goals and accomplishment.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success doesn’t come from what you do occasionally; it comes from what you do consistently."
];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get a random quote
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

// Generate a random color
const randomColor = getRandomColor();

// Display the quote with the random color
const quoteElement = document.getElementById('quote');
quoteElement.textContent = randomQuote;
quoteElement.style.color = randomColor;

function calculateBMI() {
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const height = document.getElementById("height").value / 100; // Convert cm to meters
    const weight = document.getElementById("weight").value;
    const resultDiv = document.getElementById("result");

    if (!age || !gender || !height || !weight) {
        resultDiv.innerHTML = `<span style="color: red;">Please fill in all fields.</span>`;
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


    resultDiv.innerHTML = `YOUR BMI IS ${bmi}  ${category} <br/>`;
}

function clearFields() {
    document.getElementById("age").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
}



