const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 