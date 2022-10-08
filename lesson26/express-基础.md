什么是express？
Express是基于Node.js平台，快速，开放，极简的Web框架。
其作用与Node.js内置的http模块类似，都是用来创建Web服务器的。
Express本质上就是一个npm上的第三方包，提供了快速搭建Web服务器的简便方法。
Express中文官网：https://www.expressjs.com.cn/



$ npm install express --save



hello world 

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

