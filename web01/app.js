const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`));
//console.log(tours);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",

    data: {
      tours: tours
    }
  });
});

app.post("/api/v1/tours", (req, res) => {
  //console.log(req.body);
  //res.send("Done");
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(`${__dirname}/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      status: "success",
      data: {
        tours: newTour
      }
    });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
