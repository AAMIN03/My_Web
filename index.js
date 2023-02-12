const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/users', (req, res) => {
  const user = req.body;

  // logic to store the user in a database

  res.status(201).send({ message: 'User created successfully' });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});