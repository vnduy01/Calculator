const Koa = require('koa');
const calculator = require('./calculatorMiddleware');
const numberFilterMiddleware = require('./numFilterMiddleware');
const executeMiddleware = require('./executeMiddleware');

const app = new Koa();

app.use(calculator);
app.use(numberFilterMiddleware);
app.use(executeMiddleware);

app.listen(3000);
