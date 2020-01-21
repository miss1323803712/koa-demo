const Koa = require('koa')
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

let router = new KoaRouter()

let user = require('./controller/user.js')
let product = require('./controller/product.js')


router.use('/user', user.routes())
router.use('/product', product.routes())




app.use(router.routes()).use(router.allowedMethods())

app.use(async ctx => {
  ctx.body = 'hello koa'
})


module.exports = app

// app.listen(3000, function() {
//   console.log('   Server running at:\n' + 
//   '   - Local: \u001b[38;5;6m http://localhost:3000/ \u001b[0m \n' +
//   '   - Network: \u001b[38;5;6m http://192.168.8.118:3000/ \u001b[0m')
// })