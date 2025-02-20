const express = require("express");
const { main } = require("./models/index");
const productRoute = require("./router/product");
const storeRoute = require("./router/store");
const purchaseRoute = require("./router/purchase");
const salesRoute = require("./router/sales");
const cors = require("cors");
const User = require("./models/users");
const Product = require("./models/Product");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const path = require("path");


const app = express();
const PORT = 4000;
main();
app.use(express.json());
app.use(cors());


app.use("/api/store", storeRoute);


app.use("/api/product", productRoute);


app.use("/api/purchase", purchaseRoute);


app.use("/api/sales", salesRoute);


let userAuthCheck;
app.post("/api/login", async (req, res) => {
  console.log(req.body);
  
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("USER: ", user);
    if (user) {
      res.send(user);
      userAuthCheck = user;
    } else {
      res.status(401).send("Invalid Credentials");
      userAuthCheck = null;
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});


app.get("/api/login", (req, res) => {
  res.send(userAuthCheck);
});


app.post("/api/register", (req, res) => {
  let registerUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    imageUrl: req.body.imageUrl,
  });

  registerUser
    .save()
    .then((result) => {
      res.status(200).send(result);
      alert("Signup Successfull");
    })
    .catch((err) => console.log("Signup: ", err));
  console.log("request: ", req.body);
});


app.get("/testget", async (req,res)=>{
  const result = await Product.findOne({ _id: '6429979b2e5434138eda1564'})
  res.json(result)

})


// Middleware

app.post("/predict", (req, res) => {
    const { recency, frequency, monetary, time } = req.body;

    // Ensure using the correct Python executable from the virtual environment
    const pythonProcess = spawn(path.join(__dirname, "myenv", "Scripts", "python.exe"), [path.join(__dirname, "predict.py"), recency, frequency, monetary, time]);

    let prediction = "";

    // Collect data from Python script
    pythonProcess.stdout.on("data", (data) => {
        prediction += data.toString().trim();
    });

    pythonProcess.stderr.on("data", (error) => {
        console.error(`Error from Python script: ${error.toString()}`);
        if (!res.headersSent) {
            res.status(500).json({ error: "Prediction failed" });
        }
    });

    pythonProcess.on("close", (code) => {
        if (code === 0) {
            if (!res.headersSent) {
                res.json({ prediction });
            }
        } else {
            console.error(`Python script exited with code ${code}`);
            if (!res.headersSent) {
                res.status(500).json({ error: "Prediction process failed" });
            }
        }
    });
});


app.listen(PORT, () => {
  console.log("I am live again");
});
