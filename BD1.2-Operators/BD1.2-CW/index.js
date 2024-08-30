let express = require('express');
let app = express();
let port = 3000;

// 1. Calculate Total Distance 

app.get("/total-distance", (req, res) =>{
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send((totalDistance).toString());
});

// 2. Calculate Total Time

app.get("/total-time", (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);

  let totalTimeSpent = time1 + time2 + time3;
  res.send((totalTimeSpent).toString());  
});

// 3. Calculate Average Speed

app.get("/average-speed", (req, res) =>{
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);

  let average = (totalDistance / totalTime);
  res.send((average).toString());
});

// 4. Calculate ETA

app.get("/eta", (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);

  let eta = (distance / speed);
  res.send(eta.toString());
});

// 5. Calculate Total Calories

app.get("/total-calories", (req, res) =>{
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);

  let totalCaloriesBurnt = ((duration1 + duration2) * caloriesPerMinute);
  res.send(totalCaloriesBurnt.toString());
});

// 6. Calculate interset Earned.

app.get("/interset-earned", (req, res) =>{
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);

  let intersetEarned = ((principal * rate * time) /100);
  res.send(intersetEarned.toString());
});


app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});