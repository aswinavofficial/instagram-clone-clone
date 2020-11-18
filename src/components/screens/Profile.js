import React, { useState, useEffect,useContext } from 'react'
import { UserContext } from '../../App'
import {useParams} from "react-router-dom";



const Profile = (props) => {

    const baseURL = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : 'http://localhost:5000'


    const { state, dispatch } = useContext(UserContext)
    const [posts,setPosts] = useState([])
    const [name,setName] = useState('')
    const [dp,setDp] = useState('')
    const {username} = useParams()
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
    };

    useEffect(() => {

        fetch(baseURL + '/user/' + username, requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log("Profile Details loaded")
                console.log(data)                
                if (data.error) {
                    console.log(data.error)
                }

                if(data.user !== undefined && data.user.name !==undefined) {
                setName(data.user.name)
                }

                if(data.user !== undefined && data.user.photo !==undefined) {
                    setDp(data.user.photo)
                    }
            
                if(data.posts !== undefined && data.posts.length !==0) {
                    console.log(data.posts)
                    setPosts(data.posts);
 
                }

            })
        

    },[]);

    return (
        <div className="profile">

            <div className="profile-info">
                <div >
                    <img className="display-picture" alt="dp" src={dp ? dp: ""} />
                </div>

                <div >

                    <h4>{name ? name : "Loading!!!!"}</h4>
                    <div className="stats">
                        <h6>31 posts</h6>
                        <h6>607 followers</h6>
                        <h6>1,576 following</h6>

                    </div>

                </div>

            </div>

            <div className="gallery">

            {
            posts.map((post,i)=> {

                return (
                    <img key={i} className="gallery-item" alt="myphotos" src={post.photo} />

                )

            })
        }

            </div>


        </div>
    )

}

export default Profile