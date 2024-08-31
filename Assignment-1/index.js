let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());


let taxRate = 5; 
let discountPercentage = 10;
let loyaltyRate = 2;

// 1. Calculate the total price of items in the cart

app.get("/car-total", (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let finalTotal = cartTotal + newItemPrice;

  res.send(finalTotal.toString());
});

// 2. Apply a discount based on membership status

app.get("/membership-discount", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  if (isMember === "true"){
    let finalTotal = cartTotal - (cartTotal * (discountPercentage / 100));
    res.send(finalTotal.toString());
  } else {
    res.send(cartTotal.toString());
  }
});


// 3. Calculate tax on the cart total 


app.get("/calculate-tax", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal); 
  let finalTotal = cartTotal * (taxRate / 100);
  
  res.send(finalTotal.toString());
});


// 4. Estimate delivery time based on shipping method


app.get("/estimate-delivery", (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let result = "";
  if (shippingMethod === "Standard"){
    result = distance/50;
  } else if (shippingMethod === "Express"){
    result = distance/100;    
  }
  res.send(result.toString());
  
});

// 5. Calculate the shipping cost based on weight and distance

app.get("/shipping-cost", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight * distance * 0.1;

  res.send(shippingCost.toString());
});


// 6. Calculate Loyalty-points earned from aa purchase

app.get("/loyalty-points", (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * loyaltyRate;

  res.send(loyaltyPoints.toString());
});