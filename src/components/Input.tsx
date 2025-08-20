import React, { Component} from "react";

type StateType = {
    ouputDisplay: string
}

export default class Input extends Component<unknown, StateType> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            ouputDisplay: ""
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ouputDisplay: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Du lieu: {this.state.ouputDisplay}</h1>
                <input
                    type="text"
                    value={this.state.ouputDisplay}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
