import React, { useState, useEffect } from 'react';
import Main from './components/Main';

function App() {
  const [isLogin, setIsLogin] = useState<Boolean>(false)

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
