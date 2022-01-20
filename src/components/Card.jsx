import React from 'react';
const Card = (props) => {
    console.log(props)
    return <>

        <h2> {props.titulo} </h2>
        <p> Mi contenido {props.numero} </p>
    </>;
};

export default Card;
