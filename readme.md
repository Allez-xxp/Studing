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
