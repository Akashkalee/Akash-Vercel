let express = require('express');
let app = express();
let PORT = 3000;

// get a positive number

app.get("/positive-number", (req, res) => {
  let number = parseFloat(req.query.number);
  if (number >= 0) {
    result = "The number is positive";
  } else {
    result = "The number is not positive";
  }
  res.send(result)
});


// EVEN ODD 

app.get("/check-even-odd", (req, res) =>{

  let number = parseFloat(req.query.number);
  let result = ""
  if (number % 2 === 0){
    result = "Number is even";
  }
  else {
    result = "Number is odd";
  }
  res.send(result)
});

// Checked LoggedIn 

app.get("/checkLogin", (req, res) =>{
  let isLoggedIn = req.query.isLoggedIn;
  let result = "";
  if(isLoggedIn === true) {
    result = "User is logged in";
  }
  else {
    result = "User is not logged in";
  }

  res.send(result);
});

// Check discount

app.get( "/check-discount", (req, res) =>{
  let age = parseFloat(req.query.age);
  let result = "";

  if (age > 65){
    result = "User is eleiible for a discount";
  }
  else {
    result = "User is not eleiible for a discount";
  }
  res.send(result);
})

// check weather the number is positive, negative or zero 

app.get("/check-number-type", (req, res) =>{
  let number = parseFloat(req.query.number);
  let result = "";

  if(number > 0){
    result = "Number is positive";   
  }
  else if (number < 0){
    result = "Number is negative";
  }
  else {
    result = "Number is zero";
  }

  res.send(result);
  
})

// check if temperature is cold, warm, or hot

app.get("/check-temperature", (req, res) =>{
  let temperature = parseFloat(req.query.temperature);
  let result = "";
  if(temperature < 15){
    result = "Temperature is cold";
  }
  else if (temperature <= 25){
    result = "Temperature is warm";
  }
  else {
    result = "Temperature is hot";
  }

  res.send(result);
})


app.get("/check-activity-level", (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result = "";

  if(steps < 5000){
    result = "Activity level is low";
  } else if (steps < 10000){
    result = "Activity level is moderate";
  } else {
    result = "Activity level is high"; 
  }

  res.send(result);
});


app.get("/check-engagement", (req, res) => {
  let likes = parseFloat(req.query.likes)
  let result = "";

  if(likes < 100){
    result = "Engagement level is low";
  } else if (likes <= 500){
    result = "Engagement level is moderate";
  } else {
    result = "Engagement level is high";
  }

  res.send(result);
})


app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});}