const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // allow cross-origin if needed
app.use(express.json());

let latestFormData = {};

app.post('/form-submit', (req, res) => {
  latestFormData = req.body;
  console.log('Form submitted:', latestFormData);
  res.sendStatus(200);
});

app.get('/get-form-data', (req, res) => {
  res.json(latestFormData);
});

app.get('/', (req, res) => {
  res.send('Poem Form Server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
