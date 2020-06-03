// var全局声明例子
// var a = "Allez";
// {
//     // 块级作用域{}, 但在js中无效
//     //会覆盖上面的a，造成js的作用域污染（有利有弊）
//     var a = "xxp"; 
// }
// console.log(a);

// let 局部变量
// for(let i=0;i<10;i++) {
//     console.log("循环体内："+i);
// }
// // 报错：i未定义。说明let定义的i变量只在for循环中有效
// console.log("循环体外："+i)

// // const 常量声明
// const a = "xxp";
// var a = "allez";
// // 报错：常量声明不可以再赋值
// console.log(a);

// 数组解构赋值
// 数组模式和赋值模式统一；若不统一，获得undefined或者直接报错。
// 1. 直接赋值
// let [a,b,c]=[1,2,3];
// console.log(a+b+c);

// 2.解构赋值是允许你使用默认值的
// let [foo = true] =[];
// console.log(foo); //控制台打印出true
// let [a,b="JSPang"]=['技术胖']
// console.log(a+b); //控制台显示“技术胖JSPang”

// 3.undefined和null的区别：undefined相当于什么都没有；null相当于有值，但值为null。
// let [a,b="JSPang"]=['技术胖',undefined];
// console.log(a+b); //控制台显示“技术胖JSPang”
// let [a,b="JSPang"]=['技术胖',null];
// console.log(a+b); //控制台显示“技术胖null”

// 4.解构不仅可以用于数组，还可以用于对象。
// 注意：对象的解构与数组有一个重要的不同。
// 数组的元素是按次序排列的，变量的取值由它的位置决定；
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let {f,b} = {f:'xxp',b:'allez'};
// console.log(f+b);

// 若提前定义了变量，解构时需要在最外加圆括号()
// let foo;
// ({foo} = {foo:'xxp'});
// console.log(foo);

// 字符串解构（此时字符串被转换成了一个类似数组的对象。）
// const [a,b,c] = 'xxp';
// console.log(a);
// console.log(b);
// console.log(c);

// 4.1 扩展运算符(...)
// (1)
// function xxp(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);

// }
// xxp(1,2,3);  //输出1,2,3，undefined（可以输入多个值，不会报错）
// （2）对象扩展运算符作用：对内存堆栈的引用，不改变其他变量的值
// let arr1=['www','jspang','com'];
// //let arr2=arr1;  //这样做会改变arr1的内容
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('shengHongYu'); // 给arr2追加内容
// console.log(arr2); //'www','jspang','com','shengHongYu'
// console.log(arr1); //'www','jspang','com'

// 4.2 rest运算符（...）
// function xxp(first,...arg){
//     // console.log(arg.length);
//     // for…of的循环可以避免我们开拓内存空间，增加代码运行效率
//     for(let val of arg){
//         console.log(val);
//     }
// }
// xxp(0,1,2,3,4,5,6,7);

// 5.字符串模板
// （1）ES5的拼接字符串案例：ES5下必须用+jspang+这样的形式进行拼接（容易出错）
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+jspang+'。这节课我们学习字符串模版。';
// document.write(blog);
// （2）ES6中提供字符串模板：连接符`${}`；支持HTML标签；支持运算
// let jspang='技术胖';
// let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
// document.write(blog);

// 字符串模板`${}`:支持运算
// let a=1;
// let b=2;
// let result=`<br/>${a+b}<br/>`;
// document.write(result);
// 字符串模板`${}`: 字符串查找
// （1）ES5写法：indexOf索引值，要先告诉我们索引位置（不实用）
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.indexOf(jspang));
// （2）ES6写法：ES6直接用①includes就可以判断，不再返回索引值。
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.includes(jspang));
// ②判断开头是否存在
// document.write(blog.startsWith(jspang));
// ③判断结尾是否存在
// document.write(blog.endsWith(jspang));

// 字符串复制
// document.write('jspang|'.repeat(3));

// 6. ES6的数字操作
// （1）二进制声明 binary
// let binary = 0B010101;
// console.log(binary);
// （2）八进制声明 octal 
// let octal = 0o666;
// console.log(octal);

// 进行数字验证
// (1)Number.isFinite()
// let a= 11/4;
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite('jspang'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
// (2)Number.isNaN()
// console.log(Number.isNaN(NaN)); //true

// 判断是否为整数 Number.isInteger()
// let a=123.1;
// console.log(Number.isInteger(a)); //false

// 整数转换Number.parseInt()和浮点型转换Number.parseFloat()
// let a='9.18';
// console.log(Number.parseInt(a)); 
// console.log(Number.parseFloat(a));

//  整数取值范围操作
//  最大值
// let a = Math.pow(2,53)-1;
// console.log(a); //9007199254740991
// （1）ES6提供了最大安全整数和最小安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// （2）安全整数判断 isSafeInteger( )
// let a= Math.pow(2,53)-1;
// console.log(Number.isSafeInteger(a));//false

// 7. ES6的新增数组知识（1）
// （1）json的数组格式; Array.from()方法进行类型转换
// let json = {
//     '0': 'xxp',
//     '1':'allez',
//     '2':'work',
//     length:3
// }
// let arr = Array.from(json);
// console.log(arr)
// （2）Array.of()方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);
// （3）find()实例方法，提前声明一个实例，再调用find()方法
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// }))

// 8. ES6的新增数组知识（2）
// （1）fill()实例方法：对数组进行填充(替换数组中的元素)。
// 它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
// let arr = ['allez','xxp','春花秋月'];
// arr.fill('冬暖夏凉',2,3);
// console.log(arr);
// （2）数组循环 for of循环
// let arr = ['allez','xxp','春花秋月'];
// // for (let i of arr.keys()) { //输出数组索引
// // for (let i of arr.entries()) {
// for (let [i,val] of arr.entries()){ //同时输出数组内容和索引
//     console.log(i+':'+val);
// }
// (3)entries()实例方法，next()方法获取下一个值
// let arr=['a','b','c']
// let list=arr.entries();
// console.log(list.next().value); //a
// console.log(list.next().value); //b
// console.log(list.next().value); //c

// 9.ES6中的箭头函数和扩展
// （1）ES5的函数写法（加法）
// function add(a,b) {
//     return a+b;
// }
// console.log(add(1,2));
// (2)ES6中函数增加了一个默认值写法
// function add(a,b=1) {
    // // （3）主动抛出错误
    // if(a==0) {
    //     throw new Error('A is Error');
    // }
// （4）严谨模式，ES6中，可以放在函数体中，但是不能使用默认值
// function add(a,b) {
    
//     'use strict'
//     return a+b;
// }
// console.log(add(1,2));
// 在严谨模式下，获得传入参数的个数 函数名.length。
// 如果去掉严谨模式，使用默认值，会出现错误（传递参数为1）。说明a，b要是必须传入的参数
// console.log(add.length);

// （5）箭头函数用法和注意
// ·使用箭头函数时，如果{}中只有返回值，可以不写{}，直接写。
// ·一定要使用return时，一定要加上{}
// ·如果方法体中代码不止一句，方法体外要加上{}
// 箭头函数不能当作构造函数用，不能使用new方法
// var add = (a,b=2) => a+b;
// console.log(add(1))

// 10. ES6的函数解构和数组补漏
// （1）对象的函数解构 json
// 创建对象
// let json = {
//     a: 'xxp',
//     b: 'allez'
// }
// function fun(x,y='cmq') {
//     console.log(x,y);  //返回值：{a: "xxp", b: "allez"}
//     // 直接调用json格式数据，不需要再一个个传递参数
// }
// fun(json);

// （2）数组解构
// let arr = ['a','b','c'];
// function fun(a,b,c){
//     console.log(a,b,c);
// }
// fun(...arr);

// (3) in用法
// 声明对象
// let obj = {
//     a: 'xxp',
//     b: 'allez'
// }
// // 使用in，判断该对象中有没有这个元素(返回true为有，false为没有)；是否为空
// console.log('a' in obj);
// 声明数组
// let arr = ['xxp','lyp','cmq','zl'];
// // 判断该数组某个索引对应的位置是否为空；返回true则有值，返回false则无值
// console.log(0 in arr);

// （4）遍历数组
// · forEach方法: val表示元素值，index表示索引值
// let arr = ['xxp','lyp','cmq','zl'];
// arr.forEach((val,index) => console.log(index,val));
// · filter方法
// let arr = ['xxp','lyp','cmq','zl'];
// arr.filter(x => console.log(x));
// · some方法
// let arr = ['xxp','lyp','cmq','zl'];
// arr.some(x => console.log(x));
// · map方法：将指定数组的内容都替换为目标内容；如何输出
// let arr = ['xxp','lyp','cmq','zl'];
// console.log(arr.map(x => 'abc'));

// （5）数组转换成字符串方法
// · toString()方法（用逗号隔开）
// let arr = ['xxp','lyp','cmq','zl'];
// console.log(arr.toString());
// · join方法: 在数组元素中添加间隔符号 | -(字符串类型)
// let arr = ['xxp','lyp','cmq','zl'];
// console.log(arr.join('|'));