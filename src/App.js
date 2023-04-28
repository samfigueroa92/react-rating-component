import Front from './Front';
import Back from './Back';
import { useState } from "react";

import './App.css';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      {toggle ? <Back rating={rating} /> : <Front setToggle={setToggle} setRating={setRating} />}
    </div>
  );
}

export default App;
