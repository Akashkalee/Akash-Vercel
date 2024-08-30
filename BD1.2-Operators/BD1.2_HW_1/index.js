let express = require("express");
let app = express();
let PORT = 3000;

// 1: Calculate the total marks earned in two subjects
app.get("/total-marks", (req, res) => {
  let marks1 = parseFloat(req.query.marks1);
  let marks2 = parseFloat(req.query.marks2);

  let totalMarks = marks1 + marks2;
  res.send(totalMarks.toString());
});

// 2: Calculate the total weight of items in a shipment
app.get("/total-weight", (req, res) => {
  let weight1 = parseFloat(req.query.weight1);
  let weight2 = parseFloat(req.query.weight2);
  let weight3 = parseFloat(req.query.weight3);

  let totalWeight = weight1 + weight2 + weight3;
  res.send(totalWeight.toString());
});

// 3: Calculate the total monthly salary given annual salary
app.get("/monthly-salary", (req, res) => {
  let annualSalary = parseFloat(req.query.annualSalary);

  let monthlySalary = annualSalary / 12;
  res.send(monthlySalary.toString());
});

// 4: Calculate the total number of pages read given pages per dasy and number of days

app.get("/total-pages", (req, res) => {
  let pagesPerDay = parseFloat(req.query.pagePerDay);
  let days = parseFloat(req.query.days);

  let totalPages = pagesPerDay * days;
  res.send(totalPages.toString());
});

// 5: Calculate the conversion from one currency to another given the exchange rate
app.get("/currency-conversion", (req, res) => {
  let amount = parseFloat(req.query.amount);
  let exchangeRate = parseFloat(req.query.exchangeRate);

  let convertedAmount = amount * exchangeRate;

  res.send(convertedAmount.toString());
});

// 6: Calculate the average sales of a product, given the sales on 3 days

app.get("/average-sales", (req, res) => {
  let sales1 = parseFloat(req.query.sales1);
  let sales2 = parseFloat(req.query.sales2);
  let sales3 = parseFloat(req.query.sales3);

  let avgSales = (sales1 + sales2 + sales3) / 3;
  res.send(avgSales.toString());
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});