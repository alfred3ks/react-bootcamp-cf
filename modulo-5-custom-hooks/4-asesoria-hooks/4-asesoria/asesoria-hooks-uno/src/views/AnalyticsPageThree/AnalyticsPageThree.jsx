import React from 'react';

const AnalyticsPageThree = () => {

  const [posts, setAlbums] = useState([]);

  useEffect(() => {
    if (!posts.length) {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(json => setAlbums(json))
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
      <h1>Analytics Three</h1>
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

export default AnalyticsPageThree;