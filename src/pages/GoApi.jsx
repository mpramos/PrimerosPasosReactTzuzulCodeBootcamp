import React, {useState, useEffect} from 'react';

export default function GoApi() {
    const [active, SetActive] = useState(false);
    useEffect(() =>{
            console.log("efecto secundario")
    },[active])
    
  return <div>
        <button onClick={()=>{SetActive(!active)}}>{active?'activado':'desactivado'}</button>
  </div>;
}
