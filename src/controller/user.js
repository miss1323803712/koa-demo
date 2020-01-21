const KoaRouter = require('koa-router')
let router = new KoaRouter()

let utils = require('../utils/util')

router.get('/get_all_user', async (ctx) => {
  let result = await utils.readFile('src/data/user.json')
  console.log(result)
  ctx.body = {
    code: 0,
    message: '操作成功',
    data: result
  }
})

router.post('/get_user_by_id', async (ctx) => {
  let id = ctx.request.body.name
  if (id) {
    let result = await utils.readFile('src/data/user.json')
    ctx.body = {
      code: 0,
      data: result.filter((item) => item.name === id),
      message: '操作成功'
    }
  } else {
    ctx.body = {
      code: 5301,
      message: '参数不正确'
    }
  }
})

module.exports = router