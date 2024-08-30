let express = require("express");
let app = express();
let port = 3000;

// 1. function to return a welcome message
function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

// 2. function to return a greeting message
function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}

app.get("greet", (req, res) => {
  res.send(getGreetingMessage());
});

// 3. function to check if a password is strong
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

// 4. function to return sum of two numbers
function getSum(num1, num2) {
  return num1 + num2;
}

app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});

// 5. function to return the subscription status message

function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed) {
    return username + " is subscribed ";
  } else {
    return username + " is not subscribed";
  }
}

app.get("subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === "true";
  res.send(getSubscriptionStatus(username, isSubscribed));
});

// 6. function to return the final price after discount

function getDiscountedPrice(price, discount) {
  return price - price * (discount / 100);
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(getDiscountedPrice(price, discount).toString());
});

// 7. function to write personalized greeting msg
function getPersoanlizedGreeting(age, gender, name) {
  return (
    "Hello, " + name + "! You are " + age + " years old and you are a " + gender + "."
  );
}

app.get("/personalized-greeting", (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersoanlizedGreeting(age, gender, name));
});

// 8. function to return the final price after applying dicsount and tax

function getFinalPrice(price, discount, tax) {
  let discountPrice = price - price * (discount / 100);
  return discountPrice + discountPrice * (tax / 100);
}

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(getFinalPrice(price, discount, tax).toString());
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
