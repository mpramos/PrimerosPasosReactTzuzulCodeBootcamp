import React from 'react';

export default function Character({personaje, children}) {
  return <div>
      <h3>{personaje.title}</h3>
      <h3>{personaje.firstName}</h3>
      {children}
      <img src={personaje.imageUrl} alt="" />
      </div>;
}
