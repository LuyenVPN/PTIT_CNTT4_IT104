import React, { Component } from 'react'

type ProductType = {
    id: number
    name: string
    price: string
    quantity: number
}

type PropsType = {
    product: ProductType
}

export default class ChildrenComponent extends Component<PropsType> {
    render() {
        const { id, name, price, quantity } = this.props.product
        return (
            <div>
                <h2>Du lieu trong component con</h2>
                <p>Id: {id}</p>
                <p>Product name: {name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
        )
    }
}
