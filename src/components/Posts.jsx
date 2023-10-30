import React, { useState } from 'react'

function Posts() {
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const [posts, setPosts] = useState([]);

    const handleCreation=()=>{
        const payload={
            title,
            body,
        }
        fetch("https://wild-puce-tuna-tux.cyclic.app/posts/create",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    const handleDelete = (postId) => {
       
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    };

    const handleUpdate = (postId, updatedContent) => {
      
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, content: updatedContent };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

  return (
    <div>
        <h2>Posts Page</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                    <button onClick={() => handleUpdate(post.id, 'Updated Content')}>Update</button>
                </div>
            ))}
    </div>

  )
}

export default Posts