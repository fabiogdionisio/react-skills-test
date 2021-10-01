import React from 'react';
import { useDispatch } from 'react-redux';
import ChildComponent from './ChildComponent';

function App() {
  // When I need to use redux in a real world app, I tend to use Redux Toolkil for
  // more standard way of writing redux. In this exemple I chose to implement just the core redux concepts  
  const dispatch = useDispatch()
  
  return (
    <div>
      <ChildComponent />
      <ChildComponent />
      <button onClick={() => dispatch({ type: 'CHANGE_TEXT', payload: 'App changed it'})}>Change text</button>
    </div>
  )
}

export default App;
