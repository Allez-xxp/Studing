# MongoDB的基础知识
1. MongoDB的介绍与安装
    - MongoDB的简介
    MongoDB是一个基于分布式文件存储的数据库，由C++语言编写。目的是为WEB应用提供扩展的高性能的数据存储解决方案。MongoDB是一个介于关系型数据库和非关系型数据库之间的产品，是非关系型数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。
    - MongoDB的安装步骤 
    https://www.cnblogs.com/fuwentao/p/11719001.html
    - 运行MongoDB的服务端
        - 打开命令行(快捷键win+R)，输入cmd
        - 执行mongod命令，服务就可以开启了，链接默认端口是27017
        - 再打开一个命令行链接服务，输入mongo命令
    - 命令
        - show dbs 查看所有数据库
        - db.version() 查看数据库版本
2. MongoDB基础命令-1
    注：MongoDB的操作命令为JavaScript命令
    - 常量赋值与输出命令(print())
    var x = 'hello'
    print(x)
    - 定义函数
    function xxp(){
        return 'allez';
    }
    - 重点：存储结构
        - 关系型数据库
            - 数据库(database)
            - 数据表(table)
            - 数据行
        - MongoDB
            - 数据库（db）
            - 集合(collection)
            - 文件
    - 基础shell命令
        - show dbs 显示已有数据库，如果你刚安装好，会默认有local、admin(config)，这是MongoDB的默认数据库，我们在新建库时是不允许起这些名称的
        - use admin 进入该数据库，也可以理解成为使用数据库。成功会显示：switched to db admin
        - show collections 显示数据库中的集合（关系型中叫表）
        - db 显示当前位置，也就是你当前使用的数据库名称，这个命令算是最常用的，因为你在作任何操作的时候都要先查看一下自己所在的库，以免造成操作错误
