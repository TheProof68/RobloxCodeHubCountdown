// Set the date we're counting down to
var countDownDate = new Date("May 4, 2024 15:55:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
    
  // Calculate the remaining time
  var distance = countDownDate - now;
    
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }

  // Play sound every second
  var beep = document.getElementById("beep");
  beep.play();

}, 1000);
