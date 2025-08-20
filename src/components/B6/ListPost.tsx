import React, { Component } from 'react'
import DetailPost from './DetailPost '

type PostType = {
    id: number
    title: string
    content: string
    author: string
}

type StateType = {
    posts: PostType[]
}

export default class ListPost extends Component<unknown, StateType> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            posts: [
                {
                    id: 1,
                    title: "Tai sao nen hoc ReactJS",
                    content: "Hoc ReactJS de di lam",
                    author: "David"
                },
                {
                    id: 2,
                    title: "Props trong ReactJS",
                    content: "Props giup truyen du lieu tu component con xuong component cha",
                    author: "Linda"
                },
                {
                    id: 3,
                    title: "State trong ReactJS la gi?",
                    content: "State giup tru trang thai du lieu ben trong mot component",
                    author: "David"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>Danh sach bai viet</h2>
                {this.state.posts.map((post) => (
                    <DetailPost key={post.id} post={post} />
                ))}
            </div>
        )
    }
}
