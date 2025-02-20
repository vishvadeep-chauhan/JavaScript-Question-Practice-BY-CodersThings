let intervalID = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID); // Stops after 5s
  console.log("Stopped!");
}, 5000);
