import React, { Component } from 'react';

// 校验，引入propTypes
import propTypes from 'prop-types'
class XiaojiejieItem extends Component {
    constructor(props){
        super(props)  //子组件向父组件通信
        this.handleClick = this.handleClick.bind(this)
    }
    // 组件优化
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }
    render() { 
        console.log('child-render')
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname}美容-{this.props.content}
            </li>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

// 校验属性的类型
XiaojiejieItem.propTypes = {
    // avname:PropTypes.string.isRequired,  // 必须传递，不传递就报错
    content:propTypes.string,
    index:propTypes.number,
    deleteItem:propTypes.func
}
// 默认值
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
export default XiaojiejieItem;
