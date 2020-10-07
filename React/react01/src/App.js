// App组件编写
import React, {Component} from 'react'; // ES6解构赋值
// 相当于这种写法
// import React from 'react'
// const component = React.Component

class App extends Component{
  render(){
    return (
      // JSX语法：javascript和XML的结合，
      // React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，
      // 当遇到<，JSX就当作HTML解析，遇到{就当JavaScript解析.
      <ul className='my-list'>
        <li>{true?'allez':'gg'}</li>
        <li>I love you</li>
      </ul>
      // 原生js代码, JSX原理本质
      // var child1 = React.createElement('li',null,'allez');
      // var child2 = React.createElement('li',null,'I Love you');
      // var root = React.createElement('ul',{className:'my-list'},child1,child2);
    )
  }
}
export default App;
