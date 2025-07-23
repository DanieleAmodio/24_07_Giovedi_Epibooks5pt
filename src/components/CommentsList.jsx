import React from 'react';
import SingleComment from './SingleComment';


function CommentList ({comments,  onEditOrDeleteComment}) {
    return (
        <div>
            <h6>Commenti</h6>
            {comments.map(comment => (
                <SingleComment key={comment._id} comment={comment} onEditOrDeleteComment={onEditOrDeleteComment} />
            ))}
        </div>
    );
};
export default CommentList;