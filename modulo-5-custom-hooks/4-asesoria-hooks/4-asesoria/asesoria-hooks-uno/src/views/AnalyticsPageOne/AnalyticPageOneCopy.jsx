import React from 'react';
import useAnalyticsTracker from '../../hooks/useAnalyticsTracker';
import useJsonPlaceholderFetch from '../../hooks/useJsonPlaceholderFetch';

const AnalyticsPageOneCopy = () => {

  // aqui implementamos nuestro hook:
  const posts = useJsonPlaceholderFetch("/posts");

  // Aqui implementamos nuestro hook de analytics:
  useAnalyticsTracker("AnalyticsPageOne");

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

export default AnalyticsPageOneCopy;