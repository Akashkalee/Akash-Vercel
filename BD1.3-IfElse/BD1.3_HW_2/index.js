let express = require( 'express');
let app = express();
let port = 3000;

// 1. Calculate a person's BMI category given weight and height

app.get("/check-bmi", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  let result = "";

  if (bmi < 18.5) {
    result = "Underweight";
  } else if( bmi < 24.9) {
    result = "normal weight";
  } else if (bmi < 29.9) {
    result = "Overweight";
  } else {
    result = "Obese";
  }

  res.send("BMI category is "+ result);
});

// 2. Calculate a student's academic performance base on their grade.

app.get("/check-performance", (req, res) =>{
  let grade = parseFloat(req.query.grade);
  let result;

  if (grade >= 90) {
    result = "Excellent";
  } else if (grade >= 75) {
    result = "Good";
  } else if (grade >= 50) {
    result = "average";
  } else {
    result = "poor";
  }

  res.send("Academic performance is " + result);
});
         
// 3. Calculate a person's age group given their age

app.get("/check-age-group", (req, res) => {
  let age = parseFloat(req.query.age);
  let result;

  if (age <= 12) {
    result = "child";
  } else if ( age <= 17) {
    result = "teenager";
  }else if (age <= 64) {
    result = "adult";
  } else {
    result = "senior";
  }
  res.send("Age group is " + result);
  
});

// 4. Calculate a person's loan eligibility given creditScore

app.get("/check-loan-eligibility", (req, res) => {
  let creditScore = parseFloat(req.query.creditscore);
  let result = "";

  if (creditScore >= 750) {
    result = "high";
  } else if ( creditScore >= 650) {
    result = "medium";
  } else {
    result = "low";
  }
  res.send("Loan eligibility is " + result);
});

// 5. Calculate the tax bracket they fall into.

app.get("/check-tax-bracket", (req, res) => {
  let income = parseFloat(req.query.income);
  let result = "";

  if (income <= 500000) {
    result = "10% tax bracket"
  } else if ( income <=  1000000) {
    result = "15% tax bracket"
  } else if ( income <= 1500000){
    result = "20% tax bracket";
  } else {
    result = "30% tax bracket";
  }

  res.send("You fall under the " + result );
});


app.listen(port,() => {
  console.log("Server is running on http://localhost:" + port);
});