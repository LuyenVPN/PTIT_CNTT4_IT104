import React, { Component } from 'react'

type inittalState = {
    name: string
    student: string[]
    isLogin: boolean
}

export default class State extends Component<object, inittalState> {
    constructor(props: object) {
        super(props)
        this.state = {
            name: "Luyen",
            student: ["ABG", "LOK", "HYB"],
            isLogin: true
        }
    }

    updateName = () => {
        this.setState({ name: "DZ" })
    }

    render() {
        return (
            <div>
                Hoc
                <p>Ten sinh vien: {this.state.name}</p>
                <button onClick={this.updateName}>Change</button>
                <ul>
                    {this.state.student.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
