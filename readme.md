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

  - methods 方法选项
    1. 参数的传递
    - methods的方法中进行声明参数  add:function(num){}
    - 调用方法时直接传递参数  <button @click=”add(2)”></button>
    2. $event参数
    主要包括鼠标点击的一些事件和属性，适用于交互感较强的项目
    传递方法：<button @click=”add(2,$event)”>add</button>
    3. .native修饰器
    - 给组件绑定构造器里的原生事件；将按钮封装成组件，使组件可以调用构造器里的方法
  - 将add按钮封装成组件步骤：
    1. 声明btn对象：
    var btn={
      template:`<button>组件Add</button>`     
    }
    2. 在构造器里声明该组件：
    components:{
      "btn":btn
    }
    3. 用.native修饰器来调用构造器里的add方法：
    <p><btn @click.native="add(3)"></btn></p>
  4. 作用域外部调用构造器里的方法
  <button onclick="app.add(4)" >外部调用构造器里的方法</button>

  - watch选项 监控数据
    1. 构造器
    2. 实例属性 app.$watch('xxx',function(){})

    - mixins混入选项
    - Mixins一般有两种用途：
      1. 在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。
      2. 很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用
    - mixins的执行顺序
    全局API最先执行；混入选项再执行；构造器里的后执行（原生）
    - 全局API 混入方法
      Vue.mixin({
        updated:function(){
            console.log('我是全局被混入的');
        }
      })

  - extends 扩展选项
    1. 构造器里的方法名和扩展的方法名不能重复
    2. extends选项只能对应对象
    3. delimiters的作用是改变我们插值的符号 delimiters:['${','}']

# 第四阶段 实例和内置组件
  - 实例入门- 实例属性讲解
    1. 下载并引入jQuery版本（官网查询，放在js目录），jquery只能有mounted，updated等生命周期引入  
    <script type="text/javascript" src="../assets/js/jquery-3.1.1.min.js"></script>
    2. 内部定义方法，外部实例调用
    methods:{
        add:function(){
            console.log("调用了Add方法");
        }
      }
      app.add();
  - 实例方法
    1. $mount() 挂载方法
    var vm = new jspang().$mount("#app");
    2. $destroy() 卸载方法
    function destroy(){
      vm.$destroy();
    }
    3. $forceUpdate() 更新方法
    function reload(){
      vm.$forceUpdate();
    }
    4. $nextTick() 数据修改方法
    function tick() {
        vm.message="update message info";
        vm.$nextTick(function(){
          console.log('message更新完成之后我被调用了');
        })
    }
  - 实例事件
    定义：就是在构造器外部写一个调用构造器内部的方法
    好处：可以通过这种写法在构造器外部调用构造器内部的数据
    1. $on 在构造器外部添加事件（可一直执行）
    2. $once 只执行一次事件
    3. $off 关闭事件（指定）
  - 内置组件 slot
    定义：slot是标签的内容扩展，在自定义组件时传递给组件内容，组件接收内容并输出。
    1. 在HTML的组件中用slot属性传递值。
    <jspang>
    <span slot="bolgUrl">{{jspangData.bolgUrl}}</span>    
    <span slot="netName">{{jspangData.netName}}</span>    
    <span slot="skill">{{jspangData.skill}}</span>    
    </jspang>
    2. 在组件模板中用标签接收值。
    <template id="tmp">
    <div>
        <p>博客地址：<slot name="bolgUrl"></slot></p>
        <p>网名：<slot name="netName"></slot></p>
        <p>技术类型：<slot name="skill"></slot></p>
    </div>
    </template>

# 第五阶段 vue-cli
  - 安装步骤
    1. 查看是否安装npm，若没有就到官网下载。 npm -v 查看npm版本
    2. 安装vue-cli, 命令：npm install vue-cli -g（g为全局命令）； vue -V来进行查看vue-cli的版本号
  - 项目步骤
    1. 初始化项目 $ vue init <template-name> <project-name>
    解释：
      init：表示我要用vue-cli来初始化项目
      <template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，
        1. webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。
        2. webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
        3. browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
        4. browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。
        5. -simple-一个最简单的单页应用模板。
      <project-name>：标识项目名称，这个你可以根据自己的项目来起名字。
    注意：在实际开发中，一般我们都会使用webpack这个模板，在命令行输入以下命令：vue init webpack vueclitest

  - webpack目录结构
    .
    |-- build                            // 项目构建(webpack)相关代码
    |   |-- build.js                     // 生产环境构建代码
    |   |-- check-version.js             // 检查node、npm等版本
    |   |-- dev-client.js                // 热重载相关
    |   |-- dev-server.js                // 构建本地服务器
    |   |-- utils.js                     // 构建工具相关
    |   |-- webpack.base.conf.js         // webpack基础配置
    |   |-- webpack.dev.conf.js          // webpack开发环境配置
    |   |-- webpack.prod.conf.js         // webpack生产环境配置
    |-- config                           // 项目开发环境配置
    |   |-- dev.env.js                   // 开发环境变量
    |   |-- index.js                     // 项目一些配置变量
    |   |-- prod.env.js                  // 生产环境变量
    |   |-- test.env.js                  // 测试环境变量
    |-- src                              // 源码目录
    |   |-- components                     // vue公共组件
    |   |-- store                          // vuex的状态管理
    |   |-- App.vue                        // 页面入口文件
    |   |-- main.js            // 程序入口文件，加载各种公共组件
    |-- static             // 静态文件，比如一些图片，json数据等
    |   |-- data             // 群聊分析得到的数据用于数据可视化
    |-- .babelrc                         // ES6语法编译配置
    |-- .editorconfig                    // 定义代码格式
    |-- .gitignore                 // git上传需要忽略的文件格式
    |-- README.md                        // 项目说明
    |-- favicon.ico 
    |-- index.html                       // 入口页面
    |-- package.json                     // 项目基本信息
    ·
    讲解：
    - package.json是项目根目录下的一个文件，定义该项目开发所需要的各种模块以及一些项目配置信息（如项目名称、版本、描述、作者等）
      1. scripts字段：用来指定npm相关命令的缩写。
      2. dependencies字段：指项目运行时所依赖的模块。
      3. devDependencies字段：指定了项目开发时所依赖的模块。
    - webpack.base.confg.js是webpack的基础配置文件。
    - .babelrc是Babel解释器的配置文件，存放在根目录下。Babel是一个转码器，项目里需要用它将ES6代码转为ES5代码。
    - .editorconfig是定义项目的编码规范的文件（多人合作开发项目时十分有用而且必要）。 
  
  - vue-cli模板
    - 打包代码，放在浏览器上。 执行npm run build命令后，在你的项目根目录生成了dist文件夹，这个文件夹里边就是我们要传到服务器上的文件。
    dist文件夹下目录包括：
      1. index.html主页文件:因为我们开发的是单页web应用，所以说一般只有一个html文件。
      2. static 静态资源文件夹：里边js、CSS和一些图片。
    - main.js文件：整个项目的入口文件，放在src文件下。从代码看，引入了App的组件和模板。
    - app.vue文件：
      1. <template></template>标签包裹的内容：这是模板的HTMLDom结构，里边引入了一张图片和<router-view></router-view>标签，<router-view>标签说明使用了路由机制。
      2. <script></script>标签包括的js内容；一些页面的动态效果和Vue的逻辑代码。
      3. <style></style>标签包裹的css内容。特别说明的是<style scoped></style>来声明这些css样式只在本模板中起作用。
    - router/index.js 路由文件：主要是配置路由。

# 第六阶段 vue-router
  - 定义：路由是SPA（单页应用）的路径管理器。通俗的说，vue-router就是我们WebApp的链接路径管理系统。（因为vue是单页应用，所以超链接<a>不起作用）
  - 安装vue-router：npm install vue-router --save-dev
  - 解读router/index.js文件（见具体文件注释）
  - 如何添加一个路由和页面？
    1. 在src/components目录下，新建 Hi.vue 文件。
    2. 编写文件内容，文件要包括三个部分<template><script><style>。
    3. 引入 Hi组件：我们在router/index.js文件的上边引入Hi组件。
    4. 增加路由配置：在router/index.js文件的routes[]数组中，新增加一个对象
  - router-link 设置导航
    1. 语法：<router-link to="/">[显示字段]</router-link>
    2. 解释：
      - to：是我们的导航路径，要填写的是你在router/index.js文件里配置的path值，如果要导航到默认首页，只需要写成 to=”/” ，
      - [显示字段] ：就是我们要显示给用户的导航名称，比如首页 新闻页。

  - 子路由
    1. 在router/index.js文件中配置Hi路径段，添加children字段，用于配置Hi子路由
    2. <router-view/> 既有全局作用，又有局部作用

  - vue-router的参数传递
    1. name传递参数。 在App.vue中设置<p>{{$route.name}}</p>，接收参数值
    2.通过<router-link> 标签中的to传参
     - 语法：<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link> 
     - 解释：
      - name：就是我们在路由配置文件中起的name值。
      - params：就是我们要传的参数，它也是对象形势，在对象里可以传递多个值。
  
  - 单页面多路由操作
    - 新建一个vue-cli文件，命名vue-router
    - 热更新，路径发生变化，页面局部发生变化