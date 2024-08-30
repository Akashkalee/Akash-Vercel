let express = require("express");
let app = express();
let port = 3000;

//1. Body Mass Index (BMI) Calculator

app.get("/bmi", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = (weight / (height * height));
  res.send("Your BMI is" + bmi);
});

//2. Calculate grocery checkout price
app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);

  let totalPrice = units * price;
  res.send("Your total for" + units + " " + product + " is " + totalPrice);
});

//3. Calculate the students grade in percentage

app.get("/grade", (req, res) => {
  let maths = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);

  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  res.send("Your grade in percentage is" + gradeInPercentage + "%");
});

//4. Calculate the total price after applying discount

app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);

  let discountedPrice = cartTotal - cartTotal * (discount / 100);
  res.send("Result: Your bill amount is " + discountedPrice);
});

//5. Calculate the split amount among all the friends

app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  res.send("Result: Each friend owes Rs." + splitAmount + "against the bill");
});

// 6. Convert Celsius to Fahrenheit
app.get("/celsius-to-fahrenheit", (req, res) => {
  let celsius = parseFloat(req.query.celsius);
  let faheinheit = (celsius * 9 / 5 + 32);
  res.send("Result: " + faheinheit + " Fahrenheit");
});

// 7. Calculate the employee's monthly salary

app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);

  let monthlySalary = totalHours * hourlyWage;
  res.send("Result: Your monthly salary is ₹" + monthlySalary);
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
