const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

var Router = require('koa-router');
var router = new Router();

const parseData = require('./parser.js').parseData;

const setData = results => (app.context.data = results);
parseData(setData);

router.get('/medals', async (ctx, next) => {
  const limit = Number(ctx.request.query.limit || 10);
  const offset = Number(ctx.request.query.offset || 0);
  const startPoint = limit * offset;
  const endPoint = startPoint + limit;
  ctx.body = ctx.data.slice(startPoint, endPoint);
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);
