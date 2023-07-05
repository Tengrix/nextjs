import {Metadata} from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Blog | NextJs App',
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next: {
            revalidate: 3,
        }
    })
    if(!response.ok) throw new Error('SOME ERROR')
    return response.json()
}

const Blog = async () => {
    const posts = await getData()
    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts.map((post:any)=>
                    <li key={post.id}>
                        <Link href={`/blog/${post?.id}`}>{post?.title}</Link>
                    </li>
                )}
            </ul>
        </>
    )
};

export default Blog;
