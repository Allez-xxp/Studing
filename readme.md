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

