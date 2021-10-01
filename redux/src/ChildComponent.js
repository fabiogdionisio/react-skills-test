import React from 'react';
import { useSelector } from 'react-redux';

function ChildComponent() {
  const text = useSelector((state) => state.text);

  return <div>
    {text}
  </div>
}

export default ChildComponent;
