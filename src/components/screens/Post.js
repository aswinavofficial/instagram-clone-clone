import React from 'react'

const Post = (props) => {

    const {photo,title,body,postedBy} = props.post;
     
    return (
        <div className="post">
            <div className="card post-card">
    <h6 className="postedUser">{postedBy && postedBy.name}</h6>
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