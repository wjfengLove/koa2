// 创建koa对象
const Koa = require('koa')
const app = new Koa()
// 编写响应函数（中间件）
// ctx: 上下文，web容器，ctx.request ctx.response
// next: 下一个中间件，下一层中间件是否能够得到执行，取决于next这个函数有木有被调用
app.use(async (ctx, next) => {
    ctx.response.body = 'hello world'
    await next()
})

// 第二层中间件
app.use((ctx, next) => {
    next()
})

// 第三层中间件
app.use((ctx, next) => {
    
})

// 监听端口 绑定端口号
app.listen(3000)