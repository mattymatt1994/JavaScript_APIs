console.log("Hello World!\n==========\n");

let search = document.getElementById("submitSearch");
let input = document.getElementById("searchWord");
let image = document.querySelector("img");
let feedBack = document.getElementById("feedback");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

search.addEventListener("click", () => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=0qtCVud0XXO4Fk0CtxuYFxir8uV06HcZ` + input.value, 
    {mode: "cors"}
  )
  .then((res) => 
  res.json())
  .then((res) => {
    feedBack.textContent = "";
    image.src = res.data.images.original.url;
    input.value = "";
  })
  .catch((err) => {
    console.error(err);
    feedBack.textContent = err.message;
  });
});
