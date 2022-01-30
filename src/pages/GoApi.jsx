import React, {useState, useEffect} from 'react';

export default function GoApi() {
    const [active, SetActive] = useState(false);
    useEffect(() =>{
            console.log("efecto secundario")
    },[])
    
  return <div>
        <button onClick={()=>{SetActive(!active)}}>{active?'activado':'desactivado'}</button>
  </div>;
}
