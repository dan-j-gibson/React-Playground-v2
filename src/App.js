import React, { useState } from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';


function App() {
  return (
    <>
    <TheDate />
    <Counter count={123} />
    </>
  )
    
}

export default App;