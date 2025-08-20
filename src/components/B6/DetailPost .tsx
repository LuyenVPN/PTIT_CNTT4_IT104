import React, { Component } from 'react'

type PostType = {
    id: number
    title: string
    content: string
    author: string
}

type PropsType = {
    post: PostType
}

export default class DetailPost extends Component<PropsType> {
    render() {
        const { id, title, content, author } = this.props.post
        return (
            <div>
                <p><b>Id: {id}</b></p>
                <p><b>Title:</b> {title}</p>
                <p><b>Content:</b> {content}</p>
                <p><b>Author:</b> {author}</p>
                <hr />
            </div>
        )
    }
}
