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
7. ES6的新增数组知识(1)
    - json的数组格式
    let json = {
        '0': 'xxp',
        '1':'allez',
        '2':'work',
        length:3
    }
    - Array.from() 进行类型转换，json代码转换成数组格式
    let arr = Array.from(json); //将json代码转换成数组格式
    - Array.of()方法
        - 作用：负责把一堆文本或者变量转换成数组。
        - 扩展：得到一个类6229ks似数组的字符串，使用eval来进行转换（eval效率是很低的，它会拖慢我们的程序。被Array.of()方法代替）
    - find()实例方法
        - 前提：需要提前声明实例
        - find()方法需要传入一个匿名函数并传三个形参
            - 语法：
            实例名.find(function(value,index,arr){
                代码块
            })
            - 解释参数
            (1) value:表示当前查找的值。
            (2) index:表示当前查找的数组索引。
            (3) arr:表示当前数组。
8. ES6的新增数组知识(2)
    - fill()实例方法
        - 作用：对数组进行填充(替换数组中的元素)。
        - 语法：接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
    - 数组循环 for of循环
        - 语法
        let arr=['a','b','c'] //先声明一个实例
        for (let item of arr){ for of循环输出数组内容
            console.log(item);
        }
        - 输出数组的索引 arr.keys()方法
        for (let i of arr.keys())
        - 同时输出数组内容和索引 entries()实例方法
        for (let [i,val] of arr.entries())
    - entries()实例方法
        - 说明：entries()实例方式生成的是Iterator形式的数组
        - 优点：可以让我们在需要时用next()手动跳转到下一个值。
        let arr=['a','b','c']
        let list=arr.entries();
        console.log(list.next().value); //a
        console.log(list.next().value); //b
        console.log(list.next().value); //c
9. ES6中的箭头函数和扩展
    - ES6函数方法新增知识点
        - 在函数中，参数可以使用默认值（ES5不可以）
        - 严谨模式 'use strict'，可以放在函数体中，但是不能使用默认值
    - 箭头函数中{}用法和注意
        - 使用箭头函数时，如果{}中只有返回值，可以不写{}，直接写。
        - 如果方法体内一定要使用return时，那方法体外一定要加上{}
        - 如果方法体中代码不止一句，方法体外要加上{}
        - 箭头函数不能当作构造函数用，不能使用new方法
10. ES6的函数解构和数组补漏
    - 对象的函数解构 JSON格式---》可以不需要一个个传递参数
        - 创建声明对象，添加属性
        - 声明函数，传递参数(个数要与对象中的属性个数相等)
        - 函数调用对象
    - 数组的函数解构
        - 创建声明数组，初始化（赋值）
        - 声明函数，传递参数（个数要与数组中的元素个数相等）
        - 使用...（对象扩展符），解构数组
    - in用法
        - 在对象中，用于判断该对象有没有该属性。有返回true，没有返回false。
        - 在数组中，用于判断该数组某个索引对应的位置是否为空；返回true则有值，返回false则无值。
    - 遍历数组
        - forEach方法: val表示元素值，index表示索引值
        let arr = ['xxp','lyp','cmq','zl'];
        arr.forEach((val,index) => console.log(index,val));
        - filter方法
        let arr = ['xxp','lyp','cmq','zl'];
        arr.filter(x => console.log(x));
        - some方法（同上）
        - map方法：将指定数组的内容都替换为目标内容；如何输出
        let arr = ['xxp','lyp','cmq','zl'];
        console.log(arr.map(x => 'abc'));
    - 数组转换成字符串方法
        - 数组名.toString()方法（用逗号隔开）
        - 数组名.join方法: 在数组元素中添加间隔符号 | -(字符串类型)
11. ES6的对象
    - 对象的赋值：ES6允许把声明后的变量直接赋值给对象
    - 对象key的构建: 从后端拿到key，不知道key表示什么
    - Object.is()方法：用于比较对象值是否相等
        - ===为同值相等，is()为严格相等
    - Object.assign( )方法：合并对象
12. Symbol在对象中的作用
    - Symbol的声明方式，赋值及调用（对象名[symbol变量]）
    - Symbol可构建对象的Key
    - Symbol对对象元素进行写保护（不想被获取的元素，别人不能获取）作用
13. Set和WeakSet的数据结构
    - Set(是一种数据结构；存储的是数组形式；作用是数组去重)
        - Set的声明赋值 let setArr = new Set(['xxp','熊小萍']);
        - 追加内容：add方法
        - 删除指定内容（一个）：delete方法
        - 删除全部内容：clear方法
        - 查找方法：has方法(有则返回true，无则返回false)
        - 遍历循环输出
            - for..of方法
            for(let item of setArr){
                console.log(item)
            }
            - forEach()方法
            setArr.forEach(value => console.log(value));
        - 获取数组长度size属性（只用于数组）
    - WeakSet声明（在new 的时候就放入值，将报错）；也不允许重复值
14. map数据结构
    - map声明：key可以设置成数组，值也可以设置成字符串
    var map=new Map();
    map.set(json,'iam');
    - map的增删查
        - 取值get  console.log(map.get(json));
        - 删除delete的特定值 map.delete(json);
        - size属性  console.log(map.size);
        - 查找是否存在has  consolec .log(map.has('jspang'))
        - 清除所有元素clear map.clear()
15. proxy进行预处理操作
    - 声明proxy
        - 基本形式：let pro = new Proxy({},{})
        - 解释：第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方。
    - get属性 get:function(target,key,property){}
        - 定义：是在得到某对象属性值时预处理的方法，接受三个参数
            - target：得到的目标值
            - key：目标的key值，相当于对象的属性
            - property：这个不太常用
    - set属性 set:function(target,key,value,receiver){}
        - 定义：是当要改变Proxy属性值时，进行的预先处理，接收四个参数
            - target:目标值
            - key：目标的Key值
            - value：要改变的值
            - receiver：改变前的原始值
    - apply方法
        - 作用是调用内部的方法，它使用在方法体是一个匿名函数时
16. promise对象（解决ES5开发时的回调地狱问题）
    - 回调地狱问题: 在使用ES5的时候，在多层嵌套回调时，写完的代码层次过多，很难进行维护和二次开发。
    - 先定义每个步骤的方法，再声明promise，按照顺序调用方法
    - promise的基本形式：
    new Promise(step1).then(函数).then(函数).then(函数)
17. class类
    - 声明class类
    class COder {
        <!-- 类内为方法（函数） -->
    }
    - 调用类中某一方法时，该方法应有返回值
    - 两个方法之间不需要逗号隔开
    - 在某一方法中使用this时，this表示类本身
    - constructor()方法: 传递参数后，直接使用this调用参数
    - 类的继承 extends
    class htmler extends Coder{

    }
18. 模块化操作
    - export :负责进行模块化，也是模块的输出。
    - import : 负责把模块引入，也是模块的引入操作。
    - 需要使用babel进行转换
    - export：可以让我们把变量，函数，对象进行模块话，提供外部调用接口，让外部进行引用。
        - 简单模块的引入，输出
        - 多变量的输出
        - 函数的模块化输出
        - 变量名语义化：as
    - export与export default的区别 
        - 引入方法不同：export的需要加{}，export default则不需要
        - 一个文件中export default只有一个
