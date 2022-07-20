import React, { useEffect } from 'react';
// Creamos nuestro custom hook:

const useAnalyticsTracker = (pageName) => {

  useEffect(() => {
    logAnalytics(pageName);
  }, [])

  // Aqui simulo guardar la analitica:
  const logAnalytics = (pageName) => {
    console.log("=== Analytics start===");
    console.log(pageName);
    console.log("=== Analytics end ===");
  }
}

export default useAnalyticsTracker;