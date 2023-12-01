import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import MyButton from './UI/button/MyButton';


const PostItem = (props) => {

    const navigate = useNavigate()

    //const date = new Date(props.post.dateCreated).toUTCString();

    return (
        <div className="post" >
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    <p style={{fontSize: 15}}>{props.post.body}</p>
                    {/* <p style={{ color: 'grey'}}>{date}</p> */}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate("/posts/" + props.post.id)}>
                    Open post
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;