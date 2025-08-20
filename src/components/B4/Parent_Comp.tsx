import React, { Component } from 'react'
import Children_Comp from './Children_Comp'

type StateType = {
    name: string
}

export default class Parent_Comp extends Component<unknown, StateType> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            name: "Nguyen Van Nam"
        }
    }

    render() {
        return (
            <div>
                <h2>Ho va ten ben component cha: {this.state.name}</h2>
                <Children_Comp name={this.state.name} />
            </div>
        )
    }
}
