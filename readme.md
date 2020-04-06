# 第一阶段 vue内部指令学习
- v-if: 判断是否加载，可以减轻服务器的压力，在需要时加载
  v-else与v-if连用，判断事件是否执行
- v-show: 调整CSS中display属性，可以使客户端操作更加流畅
- v-text: 用于页面的友好输入
  1. js未写
  2. 网速太慢，加载不出页面
- v-html: 将js中的html标签运行输出（尽量不要使用）
- v-on：绑定事件，并进行监听
- v-model: 绑定数据源
  v-model.lazy: 延迟加载
  v-model.number: 只加载数字（前面不能有字符串）
  v-model.trim: 前后去空格，后面加空格无用
- v-bind: 绑定HTML标签的属性（src,style,class）
  :style="{color:red,fontSize:font}" 简写v-bind绑定值
- v-pre: 原样输出
- v-cloak: 渲染完成后才显示
- v-once: 只进行第一次渲染，后面再修改都不执行

# 第二阶段 vue全局API
- 自定义指令:
 - el:指令所绑定的元素，可以用来直接操作DOM 
 - binding:一个对象，包含指令的很多信息 
 - 五个生命周期（钩子函数） 
    1. bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。
    2. inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。
    3. update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
    4. componentUpdated:被绑定元素所在模板完成一次更新周期时调用。
    5. unbind:只调用一次，指令与元素解绑时调用。
  
  - Vue.directive("",
    bind:function(el,binding){},
    inserted:function(){},
    update:function(){},
    componentUpdated:function(){},
    unbind:function(){}
    });

- Vue.extend: 扩展构造器
  1. 通过HTML标签上的id或者class来生成扩展实例构造器
  2. 直接写标签
  - 挂载到页面 
  new authorURL().$mount("#author");
  new authorURL().$mount("author");

- Vue.set: 在构造器外部操作构造器内部的数据、属性或者方法。
  - 修改外部数据方法（三种）
    1. Vue.set方法  Vue.set(outData,'count',2);
    2. Vue对象方法  app.count++;
    3. 直接操作外部数据  outData.count++;
  - 为什么使用Vue.set?
  由于Javascript的限制，Vue不能自动检测以下变动的数组。
    1. 当你利用索引直接设置一个项时，vue不会为我们自动更新。
    2. 当你修改数组的长度时，vue不会为我们自动更新。
  所以采用Vue.set(app.arr,1,'ddd')来设置改变，Vue会进行数组内容的自动更新

- vue组件
1. 全局组件和局部组件定义方法
 - 全局组件：定义在构造器外
 - 局部组件：定义在构造器里
2. props 属性
来源于双向绑定的data数据
3. 父子组件关系
 - 遵循从上到下加载规则，子组件应写在父组件之前
 - 在父组件里注册子组件，父组件调用子组件，获得子组件数据
4. component标签
  动态变化--根据不同的data值，声明组件

# 第三阶段 构造器里的选项
- propsData 主要用于全局扩展的数据传递
在扩展标签中挂载传递数据：（propsData 3步）
 1. 在全局扩展里加入props进行接收。propsData:{a:1} 
 2. 传递时用propsData进行传递。props:[‘a’] 
 3. 用插值的形式写入模板。{{ a }} 
 
 var header_a = Vue.extend({  //构造器扩展
            template: `<p>{{message}}-{{b}}</p>`,
            data: function() {
                return {
                    message: 'Hello, i am header' 
                }
            },
            props: ['b']
        });
        new header_a({propsData: {b:12}}).$mount('header');

- computed 计算选项
作用:主要是对原数据进行改造输出。（为不污染原始数据）改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号....
 1. 格式编辑 100--￥100元
 2. 反转数组 js原生方法reverse()
       