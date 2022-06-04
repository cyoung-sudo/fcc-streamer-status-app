const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/twitchApi"));

if(process.env.NODE_ENV === 'production') {
  // Serve static files from the client folder
  app.use(express.static('client/build'));
  // Load the React "index" for any "GET" routes not defined above
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});