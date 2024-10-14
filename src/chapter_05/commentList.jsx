import react from 'react';
import Comment from './comment';

const comments = [

    {
    name : "재원1",
    comment : "안녕하세요1",
    },

    
    {
        name : "재원2",
        comment : "안녕하세요2",
    },

    
    {
        name : "재원3",
        comment : "안녕하세요3",
    }
]

function CommentList(props){
    return(
        <div> 
            {comments.map((a) => {
                
        return (
                <Comment name= {a.name} comment = {a.comment} />
               );
        })}

        </div>

    );
}

export default CommentList;