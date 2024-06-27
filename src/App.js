import { useState } from 'react';
import './App.css';

function Greeting({ user, message}){
  return (
    <div>
      <h2>Hello, {user || 'Guest'}</h2>
      <p>Message of the day : {message || 'Bye'}</p>
    </div>
  );
}

function App() {
  
  const [isVisible, setIsVisible] = useState(true);
  const user = 'kalyani';
  const message = 'welcome to react programming';

  const [num, setNum] = useState(0);

  const handleChangeNum = (e) => {
    setNum(Number(e.target.value));
  }

  return (
    <div className="App">
      <h2>Conditional Rendering With &&</h2>
      <button onClick={() => {setIsVisible(!isVisible)}}>Toggle Visibility</button>
      <p>{isVisible && <p>This paragraph is rendered when isVisisble is true.</p>}</p>
      <div>
        <Greeting user={user} message={message}/>
      </div>
      <div>
        <p>
          <input type="text" value={num} onChange={handleChangeNum} placeholder="Enter value for num"/>
        </p>
        <p>
          {num % 2 === 0 && num !== 0 && <p>The {num} is even</p>}
          {num % 2 !== 0 && num !== 0 && <p>The {num} is odd</p>}
          {num === 0 && <p>Enter a valid number</p>}
        </p>
      </div>
    </div>
  );
}

export default App;
