// 使用export生成一个模块
// 1. 简单的模块输出
// export var name ='xxp'

// 2. 多变量输出
// var a ='jspang';
// var b ='技术胖';
// var c = 'web';
// export {a,b,c}

// 3.函数的模块化输出
// export function add(a,b){
//     return a+b;
// }

// 4. 语义化变量名：as
// var a ='jspang';
// var b ='技术胖';
// var c = 'web';

// export {
//     name as a,
//     y as b,
//     code as c
// }

// 5. export与export default的区别 
// (1)export的引入，输出
// export var a ='jspang';
// export function add(a,b){
//     return a+b;
// }
// import {a,add} form './temp';//也可以分开写

// // （2）export default的引入，输出
// export default var a='jspang';
// import a form './temp';