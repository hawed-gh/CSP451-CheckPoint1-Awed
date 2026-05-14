// CSP451 - CheckPoint 1 | Hussein Awed
// script.js - Client-side JavaScript

console.log("CSP451 CheckPoint 1 loaded successfully.");
console.log("Student: Hussein Awed | ID: hawed | Term: Summer 2026");

/**
 * Displays the current date and status in the #status-message element.
 * @param {string} elementId - The ID of the DOM element to update.
 */
function displayProjectStatus(elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.log("Element not found: " + elementId);
    return;
  }
  const now = new Date();
  const dateString = now.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  element.textContent =
    "Project active as of " + dateString + ". Repository is public on GitHub.";
  console.log("Status updated: " + element.textContent);
}

/**
 * Logs a greeting message to the console.
 * @param {string} name - The name to greet.
 */
function greetUser(name) {
  const message = "Welcome to CSP451 CheckPoint 1, " + name + "!";
  console.log(message);
  return message;
}

// Call the functions
displayProjectStatus("status-message");
greetUser("Hussein Awed");