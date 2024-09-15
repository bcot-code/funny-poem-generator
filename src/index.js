function generateFy(event) {
  event.preventDefault();

  alert("Processing the funny quote...");
  new Typewriter("#funny-quote", {
    strings: "I see your face when I am dreaming",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let funnyPoem = document.querySelector("#funny-poem");
funnyPoem.addEventListener("submit", generateFy);
