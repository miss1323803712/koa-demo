const KoaRouter = require('koa-router')
const utils = require('../utils/util')
let router = new KoaRouter()

router.get('/get_all_product', async (ctx) => {
  let result = await utils.readFile('src/data/product.json')
  ctx.body = {
    code: 0,
    message: '操作成功',
    data: result
  }
})

router.post('/get_product_by_city', async (ctx) => {
  let city = ctx.request.body.city
  let key = ctx.request.body.key
  if (typeof city != undefined && typeof key != undefined) {
    let result = await utils.readFile('src/data/product.json')
    ctx.body = {
      code: 0,
      message: '操作成功',
      data: result.filter(item => item.city === city).filter(item => item.name.indexOf(key) !== -1)
    }
  } else {
    ctx.body = {
      code: 5301,
      message: '参数不正确',
      data: []
    }
  }
})
module.exports = router