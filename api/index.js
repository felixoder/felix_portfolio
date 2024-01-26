const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require("./models/User");

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',  // Adjust to your React app's origin
    credentials: true,
  }));
  

app.use(express.json());

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://portfolio:g4ZQAZ7uWoT8TPID@cluster0.5hcvg7z.mongodb.net/?retryWrites=true&w=majority",
      {}
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle the error appropriately, you might want to exit the process or do some other cleanup
  }
}

connect();

app.post('/contact', async (req, res) => {
  const { uname, email, subject, message } = req.body;

  try {

    const userDoc = await User.create({
      uname,
      email,
      subject,
      message
    });
    res.json(userDoc);
   
  } catch (e) {
    console.log(e.message);
  
  }
});
app.get('/',(req,res)=>{
    res.json('hello')
  })
const PORT = 4000;  // Use HTTP
app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});



//g4ZQAZ7uWoT8TPID