import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

function Data() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");
  return (
    <>
      {data ? (
        <div>{data.status}</div>
      ) : null}
    </>
  );
};

export default Data;