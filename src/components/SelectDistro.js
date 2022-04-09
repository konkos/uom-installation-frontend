import React, { useState } from 'react'

export default function SelectDistro() {

    const distros = ["Mint", "Ubuntu", "Fedora", "OpenSuse", ""];

    const [distroOption, setdistroOption] = useState(distros[0]);

    const handleChange = (e) => {
        console.log(e.target.value);
        let idx = distros.findIndex(item => item === e.target.value);
        setdistroOption(distros[idx]);
    }

    // const handleSubmit = (e) =>{
    //     console.log(e.target.value);
    // }

  return (
      <div>
            <label>
            Please enter your Linux Distribution: &nbsp;&nbsp;
            <select value={distroOption} onChange={handleChange}> 
            {
                distros && distros.map(distro => <option value={distro} key={distro}>{distro}</option>)
            }
            </select>
            </label>
    </div>
  )
}
