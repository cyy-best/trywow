import React from "react";
import {Button, Form } from 'react-bootstrap';
import './css/comment.css';
function Comment() {

    return (
        <div className="comment">
                {/* 评论输入框 */}
                <Form>
                    <Form.Group controlId="commentInput">
                        <Form.Control type="text" placeholder="Add a comment..." />
                    </Form.Group>
                    <Button variant="primary" className="align-self-end">
                        Submit
                    </Button>
                </Form>
        </div>
    );
}

export default Comment;