# React知识系列学习
1. React简介
    - 最新的前端框架，用于构建用户界面的JavaScript库（官网https://reactjs.org）。
    - ReactJS是由Facebook在2013年5月推出的一款JS前端开源框架,推出式主打特点式函数式编程风格。值得一说的是，到目前为止ReactJS是世界上使用人数最多的前端框架,它拥有全球最健全的文档和社区体系。
2. React的特点
    - 生态强大：现在没有哪个框架比React的生态体系好的，几乎所有开发需求都有成熟的解决方案。
    - 上手简单: 你甚至可以在几个小时内就可以上手React技术，但是他的知识很广，你可能需要更多的时间来完全驾驭它。
    - 社区强大：你可以很容易的找到志同道合的人一起学习，因为使用它的人真的是太多了。
3. React的三大体系
    - React.js 用于Web开发和组件的编写
    - ReactNative 用于移动端开发
    - ReactVR 用于虚拟现实技术的开发
4. React和Vue的对比
    - React的灵活性和协作性更好，适用与复杂项目或公司核心项目
    - Vue具有丰富的API，实现起来更简单快速，适用与团队较小，项目简单
5. React的环境搭建
    - 首先需要安装Node.js
        - 已下载 
        在命令行或终端运行命令 node -v
        - 未下载
        进入Node官网，下载对应版本的Node
    - 安装React手脚架
        - 在终端（选择E盘，文件夹所在）运行命令
        npm install -g create-react-app
        - 先新建一个文件夹React，然后创建React项目
        create-react-app react01
        - 等项目创建完成后，进入项目目录
        cd react01
        - 预览项目（能打开，说明创建成功）
        yarn start / npm start
6. React项目（手脚架）目录介绍
    - 根目录中的文件
        - README.md :这个文件主要作用就是对项目的说明，已经默认写好了一些东西，你可以简单看看。，编写这个文件可以使用Markdown的语法来编写。
        - package.json: 这个文件是webpack配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置。
        - package-lock.json/ yarn.lock：这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到git，以保证其他人再npm install 时大家的依赖能保证一致。
        - gitignore : 这个是git的选择性上传的配置文件，比如一会要介绍的node_modules文件夹，就需要配置不上传。
        - node_modules :这个文件夹就是我们项目的依赖包，到目前位置，脚手架已经都给我们下载好了，你不需要单独安装什么。
        - public ：公共文件，里边有公用模板和图标等一些东西。
        - src ： 主要代码编写文件，这个文件夹里的文件对我们来说最重要，都需要我们掌握。
    - public文件夹中的文件（公共使用）
        - favicon.ico : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。
        - index.html : 首页的模板文件。
        - mainifest.json：移动端配置文件。
    - src文件夹下的文件（开发的源代码）
        - index.js : 这个就是项目的入口文件。
        - index.css ：这个是index.js里的CSS文件。
        - app.js : 这个文件相当于一个方法模块，也是一个简单的模块化编程。
        - serviceWorker.js: 这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。

7. React的简单运用和组件
    - index.js 入口文件
    - App.js 编写App组件
8. JSX的语法
    - 定义：javascript和XML的结合， React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM， 当遇到<，JSX就当作HTML解析，遇到{，就当JavaScript解析.
    - 注意：
        -命名使用className属性，小驼峰式
        - 引用的自定义组件需大写

9. 实例学习
    - Fragment标签：适用于以flex布局的组件开发；不使用最外层盒子div包裹的组件
    - 响应式设计原理和数据绑定方法 
        - React是单向数据流，需要设置数据绑定和响应事件
        - setState用于改变数据
        - bind用于改变this的指向 onChange={this.inputChange.bind(this)}
    - 添加事件 onClick={this.addList.bind(this)}
        - 使用map，遍历数组输出；使用箭头函数
        - key值命名：index+item
        - 使用扩展运算符...，把原数组进行了分解，然后添加新数据再进行组合，形成了新的数组
    - 删除事件 onClick={this.deleteItem.bind(this,index)}
        - 先声明一个局部变量,然后利用传递过来的下标index,删除数组中的值
        - 删除后用setState更新数据
        