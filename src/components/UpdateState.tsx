import React, { Component } from "react";

type StateType = {
    company: string
}

export default class UpdateState extends Component<unknown, StateType> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            company: "Rikkei Academy"
        }
    }

    handleChange = () => {
        // this.setState({
        //     company: "Rikkei Soft"
        // })
        this.setState((u)=>({
            company:u.company==="Rikkei Academy" ? "Rikkei Soft": "Rikkei Academy"
        }))
    }
    render() {
        return (
            <div>
                <h1>Ten cong ty: {this.state.company}</h1>
                <button onClick={this.handleChange}>Change</button>
            </div>
        )
    }
}
