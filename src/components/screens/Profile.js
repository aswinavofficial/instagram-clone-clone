import React, { useState, useEffect,useContext } from 'react'
import { UserContext } from '../../App'
import {useParams} from "react-router-dom";



const Profile = (props) => {

    const baseURL = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : 'http://localhost:5000'


    const { state, dispatch } = useContext(UserContext)
    const [posts,setPosts] = useState([])
    const [name,setName] = useState('')
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
                    <img className="display-picture" alt="dp" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96017536_238298287441287_4470569142725902336_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_ohc=ClnLPaiCcFMAX9rfp1U&oh=4cb3ee00eef79b6106d11f51e73eb895&oe=5F06A044" />
                </div>

                <div >

                    <h4>{name ? name : "Loading!!!!"}</h4>
                    <div className="stats">
                        <h6>31 posts</h6>
                        <h6>607 followers</h6>
                        <h6>1,576 following</h6>
                        {username}

                    </div>

                </div>

            </div>

            <div className="gallery">

                <img className="gallery-item" alt="myphotos" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/83490711_118702709687730_366031290770410053_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0kHSR4X7O6YAX_P11kH&oh=18fbe88d04c2f4befc587e52c8a3ebef&oe=5F0656F5" />
                <img className="gallery-item" alt="myphotos" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/82588565_1004066983299776_3506119637627376849_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=TscBiDnpFPYAX8yWOp_&oh=2824ff4b80e801305de4ad4a0cf35143&oe=5F06F6B0" />
                <img className="gallery-item" alt="myphotos" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/82772460_773288756482155_8020827340890508186_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=6Q2aYoSVzFEAX9-xY08&oh=ee10c7e10947fa8f3a28afc5a372130f&oe=5F05C9D2" />
                <img className="gallery-item" alt="myphotos" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-15/e35/72270435_525680094953096_8764832016083178420_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=-OyiK3HBu-oAX898mvR&oh=a2916ae8d8ad8351593bc3e82ba0e223&oe=5F0509B3" />
                <img className="gallery-item" alt="myphotos" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/71199792_825537917900596_6892033954532591162_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=07VoYGq4-tYAX8M0daR&oh=7a116e2af868df225529b1fd0c6b32c0&oe=5F066B43" />
                <img className="gallery-item" alt="myphotos" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-15/e35/75616345_426447751573794_7741125517492331551_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=JZa0NQDb1GYAX_NiLeT&oh=f88fee19892e54989cb833e51c346791&oe=5F07F971" />


            </div>


        </div>
    )

}

export default Profile