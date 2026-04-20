let affirmations = {};

const form = document.querySelector("form");
const result = document.getElementById("result");

fetch("affirmations.json")
  .then(response => response.json())
  .then(data => {
    affirmations = data;
  });

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get selected mood
  const selected = document.querySelector('input[name="feeling_option"]:checked');

  if (!selected) {
    result.textContent = "Please select a mood first.";
    return;
  }

  const mood = selected.value;

  // Get affirmations for that mood
  const moodAffirmations = affirmations[mood];

  if (!moodAffirmations) {
    result.textContent = "No affirmation found.";
    return;
  }

  // Pick random affirmation
  const randomIndex = Math.floor(Math.random() * moodAffirmations.length);
  const affirmation = moodAffirmations[randomIndex];

  // Display it
  result.textContent = affirmation;
});
