Koa -- 基于 Node.js 平台的下一代 web 开发框架

## Koa2框架使用入门

```
npm init
npm install koa
```

hello world 

```
const Koa = require('koa')
const app = new Koa()

// ctx: context, 上下文
app.use((ctx) => {
    ctx.body = 'hello koa!' // ctx.body即为HTTP响应返回的数据（即响应体中携带的数据）
})

app.listen(3000) // 监听3000端口


// 浏览器地址栏输入 http://localhost:3000/


```

https://koa.bootcss.com/#introduction



https://github.com/demopark/koa-docs-Zh-CN



