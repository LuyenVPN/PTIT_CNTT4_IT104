import React, { Component } from 'react'

type StateType = {
    id: number
    name: string
    birthday: string
    address: string
}

export default class Exercise02 extends Component<unknown, StateType> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            id: 1,
            name: "Nguyen Van Son",
            birthday: "20/12/2023",
            address: "Thanh Xuan, Ha Noi"
        }
    }

    render() {
        return (
            <div>
                <h2>Thong tin ca nhan</h2>
                <p>id: {this.state.id}</p>
                <p>Ten: {this.state.name}</p>
                <p>Ngay sinh: {this.state.birthday}</p>
                <p>Dia chi: {this.state.address}</p>
            </div>
        )
    }
}
