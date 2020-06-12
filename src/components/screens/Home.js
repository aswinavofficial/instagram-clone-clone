import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="card post-card">
                <h6 className="postedUser">Aswin</h6>
                <div className="card-image">
                    <img alt="post" src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-15/e35/102965697_566901277593692_8549877848484222783_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=nyNh-XSQxdwAX-bKqra&oh=ea374515e35d8ef5a89ef5e1eaecaa9a&oe=5F080F91" />
                </div>
                <div className="card-content">
                    <i className="material-icons like-icon">favorite</i>
                    <h6>Title</h6>
                    <p>body</p>
                    <input type="text" placeholder="Add a comment"></input>
                </div>

            </div>

        </div>
    )


}

export default Home