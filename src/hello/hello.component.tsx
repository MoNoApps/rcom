import * as React from 'react'
import { Component } from 'react'
import { IHello } from './hello.interface'

export class Hello extends Component<IHello, {}> {

  constructor(props: Object) {
    super(props);
    this.state = { seconds: 0 };
  }

  change() {
    this.setState((prev: any) => ({
      seconds: prev.seconds + 20
    }))
  }

  render() {
    return <div>
      <h1>Compiler: {this.props.compiler}</h1>
      <h2>Framework: {this.props.framework}</h2>
    </div>
  }

  componentDidMount() { }
  componentWillUnmount() { }

}