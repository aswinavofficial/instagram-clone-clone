import React, { useEffect, useState } from 'react'
import Post from './Post.js'
const Home = () => {

    const baseURL = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : 'http://localhost:5000'

    const [posts,setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false);
    const [createdOnBefore,setCreatedOnBefore] = useState(Date.now())
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
    };

    useState(() => {

        window.addEventListener('scroll', handleScroll);

        fetch(baseURL + '/post/latest?createdOnBefore=' + createdOnBefore, requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log(data)
                
                if (data.error) {
                    console.log(data.error)
                }

                console.log(data.posts)
                setPosts(data.posts);
                console.log(data.posts[0].postedBy.name)
                setCreatedOnBefore(data.posts[data.posts.length -1].createdAt)
                return () => window.removeEventListener('scroll', handleScroll);

            })

    },[])

    useEffect(() => {
  if (!isFetching) return;
  fetchMoreListItems();

}, [isFetching]);



    function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

    setIsFetching(true);

    console.log('Scrolling detected');
  }


  function fetchMoreListItems() {
  
     fetch(baseURL +  '/post/latest?createdOnBefore=' + createdOnBefore, requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log(data.posts)
                
                if (data.error) {
                    console.log(data.error)
                }

                    console.log("loading more posts : ")
                    console.log(data.posts)
                    let newPosts = [...posts,...data.posts]

                    setPosts(newPosts);
                    let newDate = newPosts[newPosts.length -1].createdAt
                    setCreatedOnBefore(newDate)
                    console.log("Data state updated")
                    console.log(posts)
                    setIsFetching(false);



            })
 
}

  
    return (

        <div className="home">
        {
            posts.map((post,i)=> {

                return (
                    <Post  
                    key={i}
                    post = {post} />
                )

            })
        }
           
        </div>
    )

    
}

export default Home