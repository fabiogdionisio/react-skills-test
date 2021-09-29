import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [text, setText] = useState("Default text");
  const timer = useRef(null);
  // There was a memory leak in using state for the timer. The unmount function on the
  // useEffect hook was not able to find the reference for the timer (because of rerenders), 
  // so it was not actually clearing it. Using react's ref feature worked like a charm.
  const [counter, setCounter] = useState(0);

  const timerTrigger = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  useEffect(() => {
    console.log('CDM');

    setText((new Date()).getMilliseconds().toString());
    timer.current = window.setInterval(() => {
      timerTrigger();
    }, 1000);

    return () => {
      console.log('CWU'); 
      window.clearInterval(timer.current);
    }
  }, [])

  return (
    <div>
      <div>
        {text}
      </div>
      <div>
        {counter}
      </div>
      <div>
        <Link to="/page2">Go to Page2</Link>
      </div>
    </div>
  )
}

export default App;
