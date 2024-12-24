const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.get('/', (req, res) => {
  try {
    const parsedBody = JSON.parse(JSON.stringify(req.body));
    res.json(parsedBody);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Invalid JSON' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});