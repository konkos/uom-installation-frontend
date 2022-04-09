import React, { useState } from 'react'
import './App.css';
import SelectDistro from './components/SelectDistro';
import SelectPackage from './components/SelectPackage';
import GetScript from './components/GetScript';

function App() {

  const numberOfScreens = 3;

  const [currentScreen, setcurrentScreen] = useState(0)

  const nextScreen = () => {  
    setcurrentScreen( (currentScreen+1) % numberOfScreens )
  }

  const previousScreen = () => {
    if(currentScreen > 0)
      setcurrentScreen( (currentScreen-1) % numberOfScreens )
  }

  return (
    <div className="App">

        {currentScreen === 0 && <SelectDistro />}

        {currentScreen === 1 && <SelectPackage />}

        {currentScreen === 2 && <GetScript />}

        <br />
        {currentScreen !== numberOfScreens-1 && <button onClick={previousScreen}>Back</button>}
        {currentScreen !== numberOfScreens-1 && <button onClick={nextScreen}>Next</button>}

    </div>
  );
}

export default App;
