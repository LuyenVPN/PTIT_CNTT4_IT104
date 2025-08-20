import React, { Component } from 'react'

type StateType = {
    name: string
}

export default class Exercises01 extends Component<unknown, StateType> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            name: "Nguyen Minh Son"
        }
    }

    render() {
        return (
            <div>
                <h1>Ho va ten: {this.state.name}</h1>
            </div>
        )
    }
}
