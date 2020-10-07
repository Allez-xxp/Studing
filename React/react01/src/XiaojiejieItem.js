import React, { Component } from 'react';

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)  //子组件向父组件通信
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.content}
            </li>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}
 
export default XiaojiejieItem;
