import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, 
            dateCreated: Date.now()
        }
        create(post)
        setPost({title: '', body: ''})
      }

  return (
    <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Title"
        />
        <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Description" 
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
  );
};

export default PostForm;
