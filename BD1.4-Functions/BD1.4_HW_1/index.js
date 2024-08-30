let express = require('express');
let app = express();
let port = 3000;

// 1. function to return welcome message

function getWelcomeMessage(){
  return "We will now learn function!";
}

app.get("/welcome", (req, res) => {
    res.send(getWelcomeMessage());  
});


// 2. function to return a greeting message

function getGreetingMessage(username){
  return "Hey," + username + "! Are you ready to learn functions with us?";
}

app.get("/greet", (req, res) => {
   let username = req.query.username;
   res.send(getGreetingMessage(username));
});


// 3. function to check if a person has experience

function checkYearsOfExperience(yearsOfExp){
  if (yearsOfExp > 0) {
    return "You have some experience with function. Great!";
  } else {
    return "No worries. You will start writing functions in no time!";
  }
}

app.get("/message", (req, res) => {
  let yearsOfExp = parseFloat(req.query.yearsOfExp);
  res.send(checkYearsOfExperience(yearsOfExp));
});


// 4. function to return the time the student can dedicate to learn functions

function getTime(days, hours) {
  return days * hours;
}

app.get("/hours", (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(getTime(days, hours).toString());
});


// 5. function to return the modules completion message

function getModuleCompletion(username, hasCompleted){
  if (hasCompleted) {
    return username + " has completed the module";
  } else {
    return username + " has not completed the module";
  }
} 

app.get("/module-completion-status", (req, res) => {
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted === "true";
  res.send(getModuleCompletion(username, hasCompleted));
});


// 6. function to return a personalized greeting message
  function getPersonalizedGreeting(city, name) {
    return "Hey, " + name + "! What's famous about" + city + "?";
  }

  app.get("/personalized-greeting", (req, res) => {
    let city = req.query.city;
    let name = req.query.city;
    res.send(getPersonalizedGreeting(city, name));
  });



// 7. function to find the age from birth year

function getAge(birthyear) {
  return 2024 - birthyear;
}

app.get("/find-age", (req, res) => {
  let birthyear = parseFloat(req.query.birthyear);
  res.send(getAge(birthyear).toString());
});

// 8. function to return the time required message

function findRequiredTime(days, hours){
  let time = days * hours;
  if (time >= 30) {
    return "The time being dedicated is sufficient for learning functions";
  } else {
    return "The time being dedicated is not sufficient for learning functions";
  }
}

app.get("/is-time-sufficient", (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(findRequiredTime(days, hours).toString());
});



app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});