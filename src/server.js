require('./database');
const express = require('express');
const TodoRouter = require('./routers/todo.router');
const UserRouter = require('./routers/user.router');
const AdminRouter = require('./routers/admin.router');

const app = express();

app.use(express.json());

app.use('/todo', TodoRouter);
app.use('/user', UserRouter);
app.use('/admin', AdminRouter);

app.use('/', (req, res) => {
  res.json({ status: 'ok' });
});


const server = app.listen(3001, () => console.log(`APP STARTED ON PORT ${ server.address().port } `));