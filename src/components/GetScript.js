import React from 'react'

export default function GetScript() {

    function getScript(){
        console.log(`${localStorage.getItem('packages')}`);
    }

  return (
    <button onClick={getScript}>GetScript</button>
  )
}
