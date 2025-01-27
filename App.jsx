
import React, { useState } from 'react';

function App() { 
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='text-3xl text-black font-bold underline'> 
        Hello world!
      </div>
    </>
  );
}

export default App;
