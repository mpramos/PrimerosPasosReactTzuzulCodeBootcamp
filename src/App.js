import React from 'react';
import Card from './components/Card'
const App = () => {
  const Alumnos=['Martha','cecilia','juan']
  const numero = Alumnos.length
  
return (
  <div>
  <p>hola</p>
      <Card title={`El numero de estudiantes es ${numero}`} numero ={numero}> </Card>
  </div>
)
  

};

export default App;