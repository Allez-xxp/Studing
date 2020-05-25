# ES6系列基础知识学习
- 搭建目录结构
    - 新建src：用于存储编写ES6的代码
    - 新建dist：用于将存储ES6转变成ES5的生成文件打包，上传
    - index.html
    - 初始化文件 npm init -y --》package.json 配置文件
    - .babelrc 用于声明类型转换，调用插件
    {"ressets": [
        "es2015"
    ],
    "plugins": []}

- ES6转换为ES5的插件 Babel
    - 安装babel命令：
        - npm install -g babel-cli
        - 解释：
            -  -g: 表示全局安装
            - -cli：表示命令行
    - 安装ES5的打包用的包： 
        - npm install --save-dev babel-preset-es2015 babel-cli
        - 解释：
            - --save-dev：本地安装
            - babel-preset-es2015 ES5的打包用的包
    - 转换命令：
        - babel src/index.js -o dist/index.js
        - 利用babel插件将src下的index.js文件转换成ES5文件输出到dist下的index.js
        - -o：输出
        - 若是想要用npm run build打包，则修改package.json中的scripts内容
        "scripts": {
            "build": "babel src/index.js -o dist/index.js"
        },
