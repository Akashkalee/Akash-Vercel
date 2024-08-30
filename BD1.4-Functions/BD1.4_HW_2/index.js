let express = require("express");
let app = express();
let port = 3000;

// 1. function to return github URL 
function generateProfileUrl(username){
let result = "https://github.com/" + username;
  return result;
}

app.get("/github-profile", (req, res) => {
  let username = req.query.username;

  res.send(generateProfileUrl(username))
});

// 2. function to return result as the certificate  

function generateCertiicate(firstName, lastName, courseName) {
  let result = "The certificate is awarded to " + firstName + " " + lastName + " for completing the course" + courseName;
  return result;
}

app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;

  res.send(generateCertiicate(firstName, lastName, courseName));
});

// 3. function to return the

function calculateGrade(maths, science, english){
  let gradeInPercentage = ((maths + science + english) / 300 * 100);
  return "Your grade in percentage is " + gradeInPercentage + "%";
}

app.get("/grade", (req, res) => {
  let maths = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);

  res.send(calculateGrade(maths, science, english));
});

// 4. 

function splitBill(billAmount, numberOfFriends) {
  let splitAmount = (billAmount / numberOfFriends);

  return "Result: Each friend owes Rs. " + splitAmount + " against the bill";
}

app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);

  res.send(splitBill(billAmount, numberOfFriends));
});

// 5. 

function calculateSalary(totalHours, hourlyWage){
  let monthlySalary = (hourlyWage * totalHours);
  return "Result: Your monthly salary is Rs. " + monthlySalary;
} 
app.get("/monthly-salary", (req, res) =>{
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);

  res.send(calculateSalary(totalHours, hourlyWage)); 
});



app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});