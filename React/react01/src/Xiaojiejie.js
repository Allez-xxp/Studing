import React,{Component, Fragment} from 'react'
import XiaojiejieItem from './XiaojiejieItem'

// 定义一个类，面向对象编程
class Xiaojiejie extends Component{
    // 构造函数constructor; 通过props与父类进行数据通信
    constructor(props){
        super(props)  // 调用父类构造函数（固定写法）
        this.state = {
            inputValue: '',  // input中的值
            list: ['小气泡', '水氧护肤']       // 服务列表
        }
    }
    render() {
        return (
            // 通常情况下，组件开发时，最外层需要用盒子包裹（（组件外层包裹原则），不然会报错
            // 出现flex布局时，最外层盒子无用 或不需要使用最外层盒子，怎么办？？
            // ---使用Fragment标签（先引入，再用它将最外层div标签替换就可以）
            <Fragment>
                <div>
                    {/* 添加响应事件onChange绑定对应方法inputChange；通过bind修改this的指向 */}
                    <input 
                        ref={(input) => (this.input=input)}
                        value= {this.state.inputValue} 
                        onChange={this.inputChange.bind(this)} 
                    />
                    <button onClick={this.addList.bind(this)}>添加服务</button>
                </div>
                {/* 列表 动态获取列表内容 添加删除事件 */}
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        // 使用map进行循环
                        this.state.list.map((item,index)=>{
                            return (
                                // 
                                // <li key={index+item} 
                                // onClick={this.deleteItem.bind(this,index)}>
                                // {item}
                                // </li>
                                // 设置必创值 avname属性
                                <XiaojiejieItem 
                                key={item+index}
                                content={item}
                                index={index}
                                // avname='小姐姐'
                                deleteItem={this.deleteItem.bind(this)}
                                />
                                
                            )
                            
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    // inputChange方法
    inputChange() {
        // console.log(e)
        // 在React中，使用setState修改值
        this.setState({
            inputValue: this.input.value
        })
    }
    // 添加事件
    addList() {
        this.setState({   //setState方法是异步函数的（虚拟dom渲染需要时间），所以我们需要添加一个回调函数将console.log放进去
            // 使用扩展运算符，把list数组进行了分解，然后添加新数据再进行组合，形成了新的数组，
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        }, () => {
            // 获取该HTML标签下的某一标签的长度 querySelectorAll('').length
            console.log(this.ul.querySelectorAll('li').length) 
        }) 
    }
    // 删除事件(列表项)
    deleteItem(index) {
        let dlist = this.state.list
        dlist.splice(index,1)
        // 更新数据
        this.setState({
            list:dlist
        })
    }
}

export default Xiaojiejie