import React, { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

type ProductType = {
    id: number
    name: string
    price: string
    quantity: number
}

type StateType = {
    product: ProductType
}

export default class ParentComponent extends Component<unknown, StateType> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            product: {
                id: 1,
                name: "Buoi ba roi",
                price: "12.000 d",
                quantity: 6
            }
        }
    }

    render() {
        return (
            <div>
                <ChildrenComponent product={this.state.product} />
            </div>
        )
    }
}
