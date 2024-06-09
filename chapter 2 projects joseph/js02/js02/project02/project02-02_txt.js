/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Joseph Gjelaj
      Date:   6/9/24

      Filename: project02-02.js
 */
// you have to put it in a browser for it to show

function verifyForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
  
      var isValid = name && email && phone;
      if (isValid) {
          window.alert("Thank you!");
      } else {
          window.alert("Please fill in all fields");
      }
  }
  
  document.getElementById("submit").addEventListener("click", verifyForm);
  