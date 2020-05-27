# ES6系列基础知识学习
1. ES6的开发环境搭建
    - 搭建目录结构
        - 新建src：用于存储编写ES6的代码
        - 新建dist：用于将存储ES6转变成ES5的生成文件打包，上传
        - index.html：HTML页面
        - 初始化文件 npm init -y --》package.json 配置文件
        - .babelrc 用于声明类型转换，调用插件
        {"presets": [
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
2. 新的声明方式
    - 三种声明方式
    (1) var variable 全局变量
    (2) let 局部声明
    (3) const 常量声明，声明之后不再改变
    - var 全局声明（变量）
    var的全局声明会造成js的作用域污染（有利有弊）
    - let 局部变量
    只在所定义的区域有效，外部调用无效。不会造成作用域的污染（适用于项目复杂，循环）
    - const 常量声明
    一旦被声明（赋值），就不再改变（适用于项目中不希望改变的值）
3. 变量的解构赋值
    - 定义：ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值的过程，称为解构。
    - 优点：在实际开发中可以减少代码量，且让程序结构更清晰
    - 数组解构赋值
        - 数组模式和赋值模式统一；若不统一，获得undefined或者直接报错。
        - 解构赋值是允许你使用默认值的。
        - undefined和null的区别：undefined相当于什么都没有；null相当于有值，但值为null。
        - 解构不仅可以用于数组，还可以用于对象。
        - 注意：对象的解构与数组有一个重要的不同。
        数组的元素是按次序排列的，变量的取值由它的位置决定；
        而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
        - 若提前定义了变量，解构时需要在最外加圆括号()，不然会报错。
    - 字符串解构(数组对象)
4. 对象扩展运算符（...）和rest运算符(简述)
    - 对象扩展运算符(...)
        - 定义: 当编写一个方法时，我们允许它传入的参数是不确定的。这时可以使用对象扩展运算符来作参数。
        - 作用：对象扩展运算符作用：对内存堆栈的引用，不改变其他变量的值。
    - rest运算符（...）
        - 定义：用于声明方法时，当传入的参数不确定时，使用rest（剩余）运算符

- 换一种方法打包：
    - 新建一个文件夹，并初始化 npm init
    - 全局安装live-server npm install -g live-server
    - 新建index.html 主页面
    - 新建index.js ES6代码
    - package.json 配置文件
5. 字符串模板
    - 字符串拼接
        1. ES5中，必须要用'+'进行字符串之间的拼接 
        2. ES6中,提供字符串模板：连接符`${}`进行字符串拼接；支持空格；HTML标签；简单运算
    - 字符串查找
        1. ES5写法：indexOf索引值，要先告诉我们索引位置（不实用）
        2. ES6直接用includes就可以判断，不再返回索引值  
        3. 判断开头是否存在 另一个字符串.startsWith(查找的一个字符串名)
        4. 判断结尾是否存在 另一个字符串.endsWith(查找的一个字符串名)
    - 字符串复制 repeat(次数)
    document.write('jspang|'.repeat(3));
6. ES6的数字操作
    - 二进制声明 binary 第一个是0，第二个是B
    - 八进制声明 octal 第一个是0，第二个是o
    - 数字判断
        - Number.isFinite( ):进行数字验证。只要是数字，不论是浮点型还是整数都会返回true，其他时候会返回false。
        - Number.isNaN():判断是不是数字。不是数字返回true，是数字返回false
    - 判断是否为整数 Number.isInteger()
    - 整数转换  Number.parseInt()
    - 浮点型转换  Number.parseFloat()
    - 整数取值范围操作
        - 最大值获取 Math.pow(2.53) 2的53次方 （容易出错）
        - ES6提供了最大安全整数 Number.MAX_SAFE_INTEGER（常量大写）
        - 最小安全整数 Number.MIN_SAFE_INTEGER
        - 安全整数判断 isSafeInteger( )


