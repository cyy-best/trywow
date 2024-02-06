import React, { useState } from "react";
import './css/comment.css';
function Comment() {
    const [state, setState] = useState({
        comments: [
            { id: 1, name: 'jack', content: 'first comment' },
            { id: 2, name: 'tom', content: 'second comment' },
            { id: 3, name: 'jerry', content: 'third comment' }
        ],
        userName: '',  // 初始化userName状态
        userContent: '' // 初始化userContent状态
    });

    const renderList = () => {
        return state.comments.length === 0 ?
            (<div className='no-comments'>No comments</div>)
            : (<ul className="comment-list">
                {state.comments.map(items => (
                    <li key={items.id}>
                        <h6 >{items.name}</h6>
                        <p>{items.content}</p>
                    </li>
                ))}
            </ul>)
    }
    const handleForm = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const addComment= () => {
        const {comments,userName,userContent} = state

        //非空校验
        if (userName.trim() === '' || userContent.trim() ===''){
            alert('please input the name and comments')
            return
        }
        const newComments = [{
            id:Math.random(),
            name: userName,
            content: userContent
        },...comments]
        setState({
            comments: newComments,
            userName:'',
            userContent:''
        })
    }

    return (
        <div className="comment">
            {
                renderList()
            }
            <div className="add-comment">
                <input className="user" type="text" placeholder="input the name" value={state.userName} name="userName" onChange={handleForm} />
                <br />
                <textarea className="content" cols='30' placeholder="input comment" value={state.userContent} name="userContent" onChange={handleForm} />
                <br />
                <button onClick={addComment}>send</button>

            </div>
        </div>
    );
}

export default Comment;