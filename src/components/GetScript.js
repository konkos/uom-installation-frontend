import React, { useState } from 'react'

export default function GetScript() {

  const [distro, setDistro] = useState("");
  const [packages, setpackages] = useState([])

    function getScript(){
      setpackages(sessionStorage.getItem("packages").split(","));
      console.log(typeof window.sessionStorage.getItem("packages"));
      
      setDistro(sessionStorage.getItem("distro"))
    }

  return (
    <div>
      <h1>{distro}</h1>

      <ul>
        {packages && packages.map( (pckg, idx) => <li key={idx}>{pckg}</li>)}
      </ul>

      <button onClick={getScript}>GetScript</button>
    </div>
  )
}
