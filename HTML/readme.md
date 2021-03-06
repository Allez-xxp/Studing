# HTML（超文本标记语言）
1. web标准：主要包括结构（structure）、表现（presentation）和行为（behavior）三个方面。（理想状态，独立存在）
    - 结构：用于对网页元素进行整理和分类（HTML）
    - 表现：用于设置网页元素的版式、颜色、大小等外观样式（CSS）
    - 行为：指网页模型的定义及交互编写（JS）
2. HTML的骨架标签
    - <html></html>: 根标签，页面中最大的标签。（包含所有标签）
    - <head></head>: 页面的头部，title标签必须在这里。
    - <title></title>: 页面的标题。
    - <body></body>: 页面的主体部分，放置页面中所有的内容。
3. HTML的标签分类
    - 常规元素（双标签）
    eg：<div>内容</div>
    - 空元素（单标签）：不包含任何内容
    eg：<br />
4. HTML的标签关系（双标签）
    - 嵌套关系(子标签缩进一个位置)
    eg：<head>
            <title>
            </title>
        </head>
    - 并列关系
    eg: <head></head>
        <body></body>
5. 字符集（数据按照哪种编码模式存储到计算机中）
UTF-8: 基本包含世界所有的需要用到的字符
<meta charset="UTF-8"> 一定要写，避免乱码。

6. 常见标签
    - 段落标签 <p></p>
    - 水平线标签（单标签）<hr />
    - 强制换行标签（单标签） <br />
    - div标签：用来布局的，但一行只能放一个div标签（上下布局）
    - span标签：用来布局的，一行可以放多个span标签（左右布局可）
7. 文本格式化标签
    - 加粗：<b></b>; <strong></strong>(推荐strong标签，加粗强调)
    - 斜体：<i></i>; <em></em>(推荐em标签)
    - 加删除线：<s></s>; <del></del>(推荐del标签)
    - 加下划线：<u></u>; <ins></ins>(不赞成使用u标签)
8. 标签属性（外在特性）
    - img（图像标签，拥有属性）<img src="图像的URL" />
        - src属性(*)：图像的路径
        - alt属性：当图像不能显示时的替换文本
        - title属性：当鼠标放在图像时，显示文字
        - width属性：修改图像大小
    - 注：
        - 标签可以有多个属性，放在标签名后
        - 属性之间不论先后顺序，以空格分开
        - 采取键值对格式：key="value"
9. 链接标签
    - 格式 <a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
    - 属性：
        - href(*): 用于指定链接目标的路径（外部链接需加网址；内部链接直接链接目标页面的名字；无明确目标用#代替，为空链接）
        - target：用于指定链接页面的打开方式，_self为默认值，_blank为在新窗口打开
10. 路径
    - 根目录：目标文件的第一层
    - 相对路径\：当保存于不同目录的网页引用同一个文件时，所使用的路径不同。
        - 同一级路径：只需要输入图像文件的名称 <img src="1.jpg">
        - 下一级路径：<img src="images/1.jpg">
        - 上一级路径：<img src="../2.jpg">
    - 绝对路径/：以根目录为参考点; 网上图片引用
11. 锚点定位（链接）
    - 定义：通过创建锚点链接，用户能够快速定位到目标内容。
    - 步骤：
        - 使用相应的id名标注跳转目标的位置。
        <h3 id="id名"></h3>
        - 使用a标签创建链接文本（被点击的）
        <a href="#id名">内容</a>
12. base标签
    - 定义：base标签可以设置整体链接的打开状态。放在head标签里
    - 格式：<base target="_blank>
13. pre标签（预格式化）
    - 定义：被包围在pre标签中的文本（呈等宽字体），通常会保存空格和换行符。

14. 表格（用于表示特殊数据）
    - 定义：由table标签、tr标签和td标签构成，缺一不可。
        - table标签：用于定义一个表格标签。
        - tr标签：用于定义表格中的行，必须嵌套在table标签中。
        - td（table data）标签：用于定义表格中的单元格内容，必须嵌套在tr标签中。
15. 表格属性
    - cellspacing：设置单元格之间的距离，默认为2px。
    - cellpadding: 设置单元格内容与单元格之间的距离，默认为1px。
    - align：设置表格的水平对齐方式
16. 表头单元格标签th
    - 定义：一般用于表头单元格的第一行或第一列，并且文本居中加粗。
17. 表格标题标签caption
    - 注意：
        - 定义表格标题，这个标题会在表格之上且居中。
        - 必须在table标签之后，只在表格中有意义。
18. 合并单元格
    - 合并方式：
        - 跨行合并
        rowspan = "合并单元格的数量"
        - 跨列合并
        colspan = "合并单元格的数量"
    - 合并顺序：先上后下，先左后右（找到目标单元格）；删掉多余的单元格
19. 表格划分结构
    - <thead></thead>: 用于定义表格的头部。（放标题，必须有tr标签）
    - <tbody></tbody>: 用于定义表格的主体。（放数据本体）
    - <tfoot></tfoot>: 用于放表格的脚注之类。
20. 列表标签
    - 定义：容器里面装载着结构，样式一致的文字或图表的一种形式。
    - 特点：整齐，整洁，有序；组合自由度高。
    - 列表类型：
        - 无序列表:各个列表之间没有顺序 '·'
        ul>li
        - 有序列表:各个列表之间有顺序（排行榜）'1. 2.'
        ol>li
        - 自定义列表:用于对术语或名词进行解释和描述，没有任何符号
        dl>dt&dd
        - 下拉列表 select>option
21. 表单（收集用户信息）
    - 定义：在HTML中，一个完整的表单通常由表单控件（表单元素）、提示消息和表单域三个部分组成。
    - input控件：输入框 
        - 语法：
        <input type='输入框类型' value='默认文本值'>
        - type类型：
            - text 文本框
            - password 密码框
            - radio 单选框（以name属性name='sex', 限制只能选择一个;checked为默认选中状态）
            - checkbox 复选框
            - button 普通按钮
            - submit 提交按钮
            - reset 重置按钮
            - image 图像形式的提交按钮（必须包含src属性）
            - file 文件域（上传文件）
            - textarea 文本域(多行输入)
    - label控件（提高用户体验，与input标签搭配使用）
        - 定义：当鼠标点击在label标签中的文字时，光标会定位到指定的位置
        - 两种方法：
            - label标签直接包含表单
            - 通过for和id来控制
            <label for='aa'>
            <input type='text' id='aa' value='请输入用户名'>
    - 表单域form
        - 定义：form标签定义表单域，用于实现用户信息的收集和传递，form中的所有内容都会被提交给服务器。
        - 语法:<form action='url地址' method='提交方式' name='表单名称'></form>
        - form属性：
            - action：用于指定接收并处理表单数据的服务器程序的URL地址
            - method：用于设置表单数据的提交方式，get/post
            - name：用于指定表单的名称，以区分同一个页面的多个表单

    