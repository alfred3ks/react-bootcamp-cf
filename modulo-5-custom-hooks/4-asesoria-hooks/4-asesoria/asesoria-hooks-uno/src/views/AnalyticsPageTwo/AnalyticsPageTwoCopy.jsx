import React, { useEffect, useState } from 'react';
import useAnalyticsTracker from '../../hooks/useAnalyticsTracker';
import useJsonPlaceholderFetch from '../../hooks/useJsonPlaceholderFetch';

const AnalyticsPageTwoCopy = () => {

  // aqui implementamos nuestro hook:
  const posts = useJsonPlaceholderFetch("/todos");

  // Aqui implementamos nuestro hook de analytics:Muy parecido a useEffect():
  useAnalyticsTracker("AnalyticsPageTwo");

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

export default AnalyticsPageTwoCopy;