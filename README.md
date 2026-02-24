# Promise-in-JavaScript
Promise in JavaScript


This summary covers the implementation of JavaScript Promises, demonstrating how to handle asynchronous operations and potential errors more cleanly than traditional callbacks.

JavaScript Promises & Error HandlingThis project explores the Promise object, which represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

1. Promise LifecycleThe promises.js file demonstrates the three states of a Promise through a randomized logic flow:Pending: The initial state when the Promise is created and the Math.random() check is performed.Resolved (Fulfilled): Triggered via resolve() if the random number is 0.5 or lower. This branch includes a 2-second delay using setTimeout.Rejected: Triggered via reject() if the random number is greater than 0.5, simulating a failed operation or condition.

2. Consumer Methods (.then and .catch)To handle the result of the Promise, the script uses standard consumer methods:MethodPurposeImplementation in Code.then()Executes when the promise is successfully resolved.Logs "Hello this is then in promise"..catch()Executes if the promise is rejected or an error occurs.Logs a maintenance message: "Site is under maintaince, please wait".

3. HTML IntegrationThe video75.html file serves as the structure for testing these scripts:Contains a div with the ID red for visual testing.Links directly to promises.js to execute the logic upon page load.Includes metadata for responsive design via the viewport meta tag.
