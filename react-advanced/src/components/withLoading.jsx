import React, { useState, useEffect } from "react";

const withLoading = (Component) => {
  const WithLaodingComponent = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);

      return () => clearTimeout(timer);
    }, [loading]);
    return loading ? <div>Loading...</div> : <Component {...props} />;
  };

  return WithLaodingComponent;
};

export default withLoading;
