/*
Mediator - The mediator is provids a middle layer between objects that communicate with each other. This pattern implemented frequently in JavaScript libaries via plugin systems (like Webpack) and middleware (like Express).
*/



import express from 'express';
const app = express();

// Middleware logic
function mediator(req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

app.use(mediator);

// Mediator runs before each route handler
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About');
});