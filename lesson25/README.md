npm install -g express

npm install -g express-generator 全局安装

通过express --version来检查当前版本号，若能显示出来，说明安装成功

2、创建项目

 express 项目名，就会在当前文件夹下生成一个项目文件夹

如输入 express lesson25 生成的lesson25项目的目录


3、启动项目

cd 项目名     进入项目目录

npm install   安装项目依赖

npm start     运行项目

 运行成功后再浏览器中输入localhost:3025就可以看到运行效果



 

 npm install ejs --save

 // 方法 2: 分别传递参数 (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});