import React from 'react';
import Card from './components/Card'
const App = () => {
  // se regresan elementos de JSX
  const numero = 1
  const componente = {
    numero: numero
  }

  const listaAlumnosSimple = ["Maria","Estebam","daniel"]
  const ListaJSX =[]
 
  const listaAlumnos = [<p>Maria</p>,<p>Estebam</p>,<p>Daniel</p>]
  return (
    <div>
      <p id='saludo'>Hola</p>
      <Card titulo ={`La tarjeta numero ${numero}`} numero={numero}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      {/* {listaAlumnos} */}
      {listaAlumnosSimple.map((alumno, index)=><p key ={index}>{alumno}</p>)}
    </div>
  )

};

export default App;