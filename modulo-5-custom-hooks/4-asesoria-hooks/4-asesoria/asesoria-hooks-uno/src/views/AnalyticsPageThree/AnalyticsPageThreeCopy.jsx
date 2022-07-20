import React, { useEffect, useState } from 'react';
import useAnalyticsTracker from '../../hooks/useAnalyticsTracker';
import useJsonPlaceholderFetch from '../../hooks/useJsonPlaceholderFetch';

const AnalyticsPageThreeCopy = () => {

  // aqui implementamos nuestro hook:
  const posts = useJsonPlaceholderFetch("/albums");

  // Aqui implementamos nuestro hook de analytics:
  useAnalyticsTracker("AnalyticsPageThree");

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

export default AnalyticsPageThreeCopy;