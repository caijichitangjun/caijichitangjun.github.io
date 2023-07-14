/*
 * @Author: 浅笑
 * @Date: 2023-07-12 16:09:43
 * @FilePath: \wps\test\my-demo\src\App.js
 */
// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Test from './Test'

export default class App extends React.Component {
  state = {
    count: 0
  }

  clickHandle = () => {
    // this.setState({ count: this.state.count + 1 })+

    this.setState({ count: this.state.count + 2 })
    // 这里由于setState是异步执行的，这里会打印出上一次的结果
    // console.log(this.state.count)
    // this.test()
    // console.log(this.state.count)
  }

  test = () => {
    this.setState({ count: this.state.count + 3 })

    this.setState({ count: this.state.count + 4 })
    console.log(this.state.count)
  }

  componentDidMount() {
    // this.setState({ count: this.state.count + 1 })
    // console.log(this.state.count)
    this.setState({ count: this.state.count + 1 })
    // console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <Test></Test>
      </div>
    )
  }
}

