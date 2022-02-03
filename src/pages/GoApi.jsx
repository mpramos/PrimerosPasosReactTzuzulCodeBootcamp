import React, {useState, useEffect} from 'react';
import Character from './Character';

export default function GoApi() {
        const [characters,SetCharacters] = useState([])
        // Ejemplo en desestructuración
        /* const miObjeto=[
                nombre : Maria,
                ciudad :La Paz
        ]
        const {nombre} = MiObjeto
    */
        // Usando Promesas
//    useEffect(()=>{
//         fetch('https://thronesapi.com/api/v2/Characters')
//         .then(res=>res.json())
//         .then(data =>SetCharacters(data))
//    }, [])
   // Usando Asyn y Await
   useEffect(()=>{
       async function fetchData(){
           const res = await fetch('https://thronesapi.com/api/v2/Characters')
           const data = await res.json()
           SetCharacters(data)
       }
       fetchData()
   }, [])
  return <div>
      {console.log(characters)}
        {characters.map(character=> <Character key={character.id} personaje={character}>
            {/* {ejemplo de children } */}
            <p>Contenido1</p>
            <p>Contenido2</p>
        </Character> )}
  </div>;
}

 