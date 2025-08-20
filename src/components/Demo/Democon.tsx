import React, { Component } from 'react'
type Prop={
    name:string
    age:number
}
export default class Democon extends Component <Prop> {
  render() {
    console.log("Nhan tu cha:",this.props);
    const { age, 
        // name
     } = this.props
    // const age=this.props.age
    return (
      <div>
        con
        <p>Name: {this.props.name}</p>
        <p>Tuoi: {age}</p>
      </div>
    )
  }
}
