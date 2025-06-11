import { useEffect, useState } from "react"
import Post from "./post";
export default function Posts(){
 
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data) )
    } , [])

    return (
        <div className=''>
            <h3>post:{posts.length}</h3>
        {
           
            posts.map(post => <Post key={post.id} post={post}></Post>)
        }

        </div>
    )
}