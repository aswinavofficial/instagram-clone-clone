import React, { useContext , useState} from 'react'
import { UserContext } from '../../App'
import { Link, useHistory } from 'react-router-dom'

import M from 'materialize-css'

const NewPost = () => {

    const baseURL = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : 'http://localhost:5000'
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [photo, setPhoto] = useState("")

    const submitPost = () => {

        

    if (title === "") {
            M.toast({ html: "Please input a valid title", classes: "#c62828 red darken-3" })
            return
        }

        if (body === "") {
            M.toast({ html: "Please input a valid body", classes: "#c62828 red darken-3" })
            return
        }

const formData = new FormData();

formData.append('file', photo);
formData.append('upload_preset', 'insta-post');
formData.append('cloud_name', 'dzfjtvyhe');

fetch('https://api.cloudinary.com/v1_1/dzfjtvyhe/image/upload', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result.secure_url);

  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                 },
        body: JSON.stringify({
            title,
            body,
            photo : result.secure_url
        })
    };

  fetch(baseURL + '/post', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                    history.push('/')

                }
                else {
                    
                    M.toast({ html: 'SUCCESS', classes: "#388e3c green darken- 2" })
                    history.push('/')
                }
                
            }).catch(error => {
                console.log(error)
                M.toast({ html: error.message, classes: "#c62828 red darken-3" })

            })
})
.catch(error => {
  console.error('Error:', error);
});

     


    }


    return (
    <div className ="card input-filed"
    style = {{
        margin: "20px auto",
        maxWidth: "500px",
        padding : "30px",
        textAlign : "center"
    }}>

        <input type="text" placeholder="Title"
        value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} 
                 />
        <input type="text" placeholder="Body" 
        value={body} onChange={(e) => {
                    setBody(e.target.value)
                }} />

        <div className="file-field input-field">
      <div className="btn #64b5f6 blue darker-1">
        <span>Image</span>
        <input type="file"
        onChange={(e) => {
                    setPhoto(e.target.files[0])
                }} 
                 />

      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>

      
    </div>

    <button className="btn waves-effect waves-light #64b5f6 blue darker-1 submit-post-button"
                    onClick={() => {
                       submitPost()
                    }}
                >
                    Submit Post
     </button>

    </div>
    )

}

export default NewPost