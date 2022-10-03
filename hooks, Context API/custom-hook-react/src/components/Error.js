import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

function Error() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : null}
    </>
  );
};

export default Error;