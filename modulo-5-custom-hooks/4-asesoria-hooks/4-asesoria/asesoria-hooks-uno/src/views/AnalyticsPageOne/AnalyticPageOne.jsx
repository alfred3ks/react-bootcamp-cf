import React, { useEffect, useState } from 'react';

const AnalyticsPageOne = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
    if (!posts.length) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setPost(json))
    }
  }, [])

  useEffect(() => {
    logAnalytics();
  }, [])

  // Aqui simulo guardar la analitica:
  const logAnalytics = (pageName) => {
    console.log("=== Analytics start===");
    console.log(pageName);
    console.log("=== Analytics end ===");
  }

  return (

    <div>
      <h1>Analytics One</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>);
}

export default AnalyticsPageOne;