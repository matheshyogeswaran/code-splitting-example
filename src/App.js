import React, { Suspense } from 'react';
import './App.css';

const Component1 = React.lazy(() => import('./component/Component1'));
const Component2 = React.lazy(() => import('./component/Component2'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Component1 />
        <Component2 />
      </Suspense>
    </div>
  );
}

export default App;
