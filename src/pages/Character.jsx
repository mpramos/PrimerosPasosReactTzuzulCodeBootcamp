import React from 'react';

export default function Character({personaje}) {
  return <div>
      <h3>{personaje.title}</h3>
      <h3>{personaje.firstName}</h3>
      <img src={personaje.imageUrl} alt="" />
      </div>;
}
