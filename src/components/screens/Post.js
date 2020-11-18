import React from 'react'
import { Link  } from 'react-router-dom'
const Post = (props) => {

    const {photo,title,body,postedBy} = props.post;
     
    return (
        <div className="post">
            <div className="card post-card">
    <div className = "post-titlebar">
    <i className="material-icons Medium user-img-card">account_circle</i>
    <Link to={'/' + postedBy._id} >
    <div className="postedUser" >{postedBy && postedBy.name} </div> 
    </Link>
    </div>
    
                <div className="card-image">
                    <img alt="post" src={photo} />
                </div>
                <div className="card-content">
                    <i className="material-icons like-icon">favorite</i>
                    <h6>{title}</h6>
                    <p>{body}</p>
                    <input type="text" placeholder="Add a comment"></input>
                </div>

            </div>

        </div>
    )


}

export default Post