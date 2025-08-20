import React, { Component } from 'react'

type PropsType = {
    name: string
}

export default class Children_Comp extends Component<PropsType> {
    render() {
        return (
            <div>
                <h2>Ho va ten ben component con: {this.props.name}</h2>
            </div>
        )
    }
}
