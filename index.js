document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded");
  
    // Target the paragraph with id="text"
    const paragraph = document.getElementById("text");
  
    // Replace its text content
    paragraph.textContent = "This is really cool!";
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  