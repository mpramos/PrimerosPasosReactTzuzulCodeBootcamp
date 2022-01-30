import React,{useState} from 'react';
const Card = (props) => {
    let [cont,Setcont] = useState(0)
    let aumenta=()=>{
        return Setcont(cont + 1)
    }
    return (
        <>
        <p> {props.title}</p>
        <p> {cont}</p>
        <button onClick={aumenta}>Aumenta</button>
        </>
    )
};

export default Card;
