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
function xxp(first,...arg){
    // console.log(arg.length);
    // for…of的循环可以避免我们开拓内存空间，增加代码运行效率
    for(let val of arg){
        console.log(val);
    }
}
xxp(0,1,2,3,4,5,6,7);

