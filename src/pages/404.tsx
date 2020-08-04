import React from 'react';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        height: '100%',
        paddingBottom: '1rem',
        color: 'white',
      }}
    >
      <h1>Page Not Found</h1>
      <p>Sorry, but the requested page you are looking for does not exist</p>
      <h1
        style={{
          fontStyle: 'normal',
          fontSize: '200px',
          marginTop: '0.2rem',
        }}
      >
        404
      </h1>
    </div>
  );
}
