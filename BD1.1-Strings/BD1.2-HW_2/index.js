let express = require("express");
let app = express();
let port = 3000;

// 1. send a custom commit message

app.get("/custom-commit", (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let result = type + ":" + message;
  res.send(result);
});


// 2. Generate certificate for students 

app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  let result = "This certification is awarded to " + firstName + " " + lastName + "for completing the course" + courseName;

  res.send(result);
});


// 3. Configure a custom out-of-office message

app.get("/autoreply", (req, res) => {
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  let result = "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from" + startMonth +" till "+ endMonth +". Your enquiry will be resolved by another collegue";
  
  res.send(result);
});

// 4. Send a secure URL 

app.get("secureurl1", (req, res) => {
  let domain = req.query.domain;
  let result = "https://" + domain;
  
  res.send(result);
});



// 5. Send a verification OTP

app.get("/sendotp", (req, res) =>{
let otpCode = req.query.otpCode;
let result = "Your OTP for account verification is " + otpCode + ". Do not share this with anyone"

res.send(result);

});


// 6. Send a welcome email

app.get("/welcome", (req, res) => {
  let firstName = req.query.firstName;
  let email = req.query.email;
  let result = "Welcome " + firstName + ". We're excuted to have you here, we'll send future notification to your registered mail (" + email + ")";

  res.send(result);
});

// 7. Generate Github profile URL

app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  let result = "https://github.com/" + username;
  res.send(result);
});

// 8. Convert text into CSV row format

app.get("text-to-csv", (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  let result = id + "," + email + "," + rollNumber;
  res.send(result);
});


app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
