const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse POST request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="text-align: center;">
    <form action="/submit" method="POST">
      <label>Name: <input type="text" name="name" required /></label><br><br>
      <label>Email: <input type="email" name="email" required /></label><br><br>
      <button type="submit">Submit</button>
    </form>
   </div>
  </div>
  `);
});

// Handle POST form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="text-align: center;">
      <h2>Received Form Data</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    </div>
  </div>
`);
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});