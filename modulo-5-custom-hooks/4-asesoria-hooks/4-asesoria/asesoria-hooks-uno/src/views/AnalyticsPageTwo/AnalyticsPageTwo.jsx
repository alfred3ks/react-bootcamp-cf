import React from 'react';

const AnalyticsPageTwo = () => {

  const [posts, setTodos] = useState([]);

  useEffect(() => {
    if (!posts.length) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => setTodos(json))
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
      <h1>Analytics Two</h1>
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

export default AnalyticsPageTwo;