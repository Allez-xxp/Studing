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

// 11. ES6的对象
// （1）对象的赋值
// ES6允许把声明的变量直接赋值给对象
// let name="jspang";
// let skill= 'web';
// var obj= {name,skill};
// console.log(obj);  //Object {name: "jspang", skill: "web"}

// （2）对象key的构建: 不知道key表示什么
// let key='skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj.skill);   // {'skill':'web'}

// （3）Object.is()方法：用于比较对象值是否相等
// var obj1 = {name:'jspang'};
// var obj2 = {name:'jspang'};
// console.log(obj1.name === obj2.name);//true
// console.log(Object.is(obj1.name,obj2.name)); //true
// // === 和 is方法的区别
// // ===为同值相等，is()为严格相等。
// console.log(+0 === -0);  //true
// console.log(NaN === NaN ); //false
// console.log(Object.is(+0,-0)); //false
// console.log(Object.is(NaN,NaN)); //true

// （4）Object.assign( )合并对象
// var a={a:'jspang'};
// var b={b:'技术胖'};
// var c={c:'web'};

// let d=Object.assign(a,b,c)
// console.log(d);

// // 12. Symbol在对象中的作用
// // （1）回顾有哪些数据类型 String,Number,Boolean,Array,Object
// // （2）symbol的声明并赋值输出
// let xxp = Symbol('熊小萍');
// console.log(xxp);  // 红色字体为Symbol类型
// console.log(xxp.toString());  // 蓝色字体为字符串类型

// // （3）如何用Symbol构建对象的Key，并调用和赋值
// let xxp1 = Symbol();
// let obj = {
//     [xxp1] : '小姑娘'
// }
// // 输出方式由.改为[]
// console.log(obj[xxp1]);
// // 可直接修改内容
// obj[xxp1] = '大哥哥'
// console.log(obj[xxp1]);

// // （4）Symbol对对象元素的保护作用
// // 没有保护的写法，可以获取对象中所有的值
// var obj2={name:'jspang',skill:'web',age:18};

// for (let item in obj2){
//     console.log(obj2[item]);
// }
// // 进行写保护，对于不想输出的元素进行保护
// let obj1={name:'jspang',skill:'web'};
// let age1=Symbol();
// obj[age1]=18;
// for (let item in obj1){
//     console.log(obj1[item]);
// } 
// console.log(obj1);

// 13. Set和weakset的数据结构
// （1）什么是Set? 是一种数据结构；存储的是数组形式；作用是数组去重
// (2)声明Set，赋值
// let setArr = new Set(['xxp','熊小萍']);
// // (3)追加内容：add方法；数组是push方法
// setArr.add('小姑娘');
// // (4)删除指定内容（一个）：delete方法
// // (5)删除全部内容：clear方法
// // setArr.delete('xxp');
// // setArr.clear();
// // (6)查找方法：has方法(有则返回true，无则返回false)
// console.log(setArr.has('xxp'));
// console.log(setArr);
// // (7)遍历循环输出 
// // ·for..of
// for(let item of setArr){
//     console.log(item)
// }
// // ·forEach()
// setArr.forEach(value => console.log(value));
// // （8）获取数组长度size属性（只用于数组）
// console.log(setArr.size)

// // （9）WeakSet声明（在new 的时候就放入值，将报错）；也不允许重复值
// let weakObj=new WeakSet();
// let obj={a:'jspang',b:'技术胖'}
// weakObj.add(obj);

// console.log(weakObj);

// 14. map数据结构
//（1）map声明：key可以设置成数组，值也可以设置成字符串
// let json = {
//     name:'jspang',
//     skill:'web'
// }
// console.log(json.name);

// var map=new Map();
// map.set(json,'iam');
// console.log(map);
// // map的增删查
// // 取值get
// console.log(map.get(json));
// // 删除delete的特定值
// map.delete(json);
// console.log(map)
// // size属性 
// console.log(map.size);
// // 查找是否存在has
// console .log(map.has('jspang'))
// // 清楚所有元素clear
// map.clear()

// 15. proxy：进行预处理操作；函数和对象的生命周期
// （1）回顾定义对象方法
// let obj = {
//     add:function(val) {
//         return val + 100;
//     },
//     name:'I am xxp'
// }
// console.log(obj.add(100));
// console.log(obj.name);

// (2) 声明proxy
// let pro = new Proxy({
//     // 对象体
//     add:function(val) {
//         return val + 100;
//     },
//     name:'I am xxp'

// },{
//     // 预处理机制（get，set，apply）
//     // get属性是在你得到某对象属性值时预处理的方法
//     get:function(target,key,property) {
//         return target[key];
//     },
//     // set属性是值你要改变Proxy属性值时，进行的预先处理
//     set:function(target,key,value,receiver){
//         console.log(`setting ${key} = ${value}`);
//         return target[key] = value;
//     },
    
// }) 
// (3) apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时
    // let target = function () {
    //     return 'I am JSPang';
    // };
    // let handler = {
    //     apply(target, ctx, args) {
    //         console.log('do apply');
    //         return Reflect.apply(...arguments);
    //     }
    // }
    
    // let pro = new Proxy(target, handler);
    
    // console.log(pro());

// 16. promise对象：解决es5的回调地狱问题
// let state=1;

// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }

// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }

// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//      if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }
// // 先定义每个步骤的方法，再声明promise，按照顺序调用方法
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//      console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// });

// 17. class类的使用
// （1）声明class类
// class Coder{
//     // 类内为方法(函数)
//     name(val){
//         console.log(val);
//     }
// }
// （2）类的实例化
// class Coder{
//     name(val){
//         console.log(val);
//     }
// }

// let xxp= new Coder;
// jspang.name('xxp');
// (3) 类的多方法声明
// class Coder{
//     name(val){
//         console.log(val);
//         return val;  // 调用name()方法，name方法中需要返回值
//     }
//     // 两个方法之间不需要逗号隔开
//     skill(val){
//         // this表示类本身Coder
//         console.log(this.name('xxp')+':'+'Skill:'+val);
//     }
// }

// let jspang= new Coder;
// // jspang.name('xxp');
// jspang.skill('web');

// (4) 类的传参，constructor()方法: 传递参数后，直接使用this调用参数
// class Coder{
//     name(val){
//         console.log(val);
//         return val;
//     }
//     skill(val){
//         console.log(this.name('xxp')+':'+'Skill:'+val);
//     }

//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     add(){
//         return this.a+this.b;
//     }
// }
// // let jspang=new Coder(1,2);
// // console.log(xxp.add());
// （5）类的继承 extends
// class htmler extends Coder{

// }

// let pang=new htmler;
// pang.name('熊小萍');