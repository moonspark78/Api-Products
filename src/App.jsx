import { useState } from 'react';
import './App.css';
import { Callback } from './components/Callback';
import {Products} from "./components/Products"

function App() {
  const [uiColor, setUiColor] = useState(null)

  const handleChangeColor = (color) => {
      setUiColor(color)
  };

  return (
    <div className="App">
      {/* <Products/> */}
      <div className="lor" style={{backgroundColor: uiColor}}></div>
      <Callback sisi={handleChangeColor}/>
    </div>
  );
}

export default App;
