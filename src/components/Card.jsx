import React,{useState} from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    let [cont,Setcont] = useState(0)
    let aumenta=()=>{
        return Setcont(cont + 1)
    }
    return (
        <>
        <p> {props.title}</p>
        <a href="/got">Game of thrones </a>
        <Link to="/got">Game Of Thrones API</Link>
        <p> {cont}</p>
        <button onClick={aumenta}>Aumenta</button>
        </>
    )
};

export default Card;
