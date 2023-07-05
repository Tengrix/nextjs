import React from 'react';
import {Metadata} from "next";

type Props = {
    params: {
        //название папки обязательно
        id: string
    }
}

async function getData(id: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        }
    })
    return response.json()
}
export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title
    }
}

const Post = async ({params: {id}}: Props) => {
    const post = await getData(id)
    console.log(post)
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
};
export default Post
