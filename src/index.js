function displayPoem(response) {
  console.log("Generated Poem!");
  //response.data.answer
  new Typewriter("#funny-quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFy(event) {
  event.preventDefault();

  let instruction = document.querySelector("#words");
  // Build the API URL
  let apiKey = "db9df5cafd32a54ef0cf0c7bd2635oct";
  let context =
    "A humorous AI who loves funny poem and generate in four sentences in basic HTML. Make sure to be nice and follow the user instructions.";
  let prompt = `User Instructions: your AI assistant,be nice and short to the point ${instruction.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //   alert("Processing the funny quote...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  // Call the API
  axios.get(apiUrl).then(displayPoem);
  // Display API funny poem
  let hiding = document.querySelector("#funny-quote");
  hiding.classList.remove("hide");
  hiding.innerHTML = `Generate a Funny Poem ${instruction.value}`;
}
let funnyPoem = document.querySelector("#funny-poem");
funnyPoem.addEventListener("submit", generateFy);
