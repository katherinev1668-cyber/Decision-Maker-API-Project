let affirmations;

fetch("affirmations.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    affirmations = response;
    console.log(affirmations);
  })

 form.addEventListener("submit", function(event) {
event.preventDefault();
})

