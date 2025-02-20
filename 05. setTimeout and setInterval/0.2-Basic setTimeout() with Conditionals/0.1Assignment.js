// Q1: Greet Based on Time

// Create a function called greetUser that checks if the time is before 12 PM.
// 	•	If yes, print "Good morning!" after 2 seconds.
// 	•	Otherwise, print "Good day!" after 2 seconds.

// ------------------------------------------------------

function greetUser() {
  let currentHour = Date().getHours();

  setTimeout(() => {
    if (currentHour < 12) {
      console.log("Good morning");
    } else {
      console.log("good Day");
    }
  }, 20000);
}

greetUser();
