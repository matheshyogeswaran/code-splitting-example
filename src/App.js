import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Component1 = React.lazy(() => import('./components/Component1'));
const Component2 = React.lazy(() => import('./components/Component2'));

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/1">Component1</Link>
            </li>
            <li>
              <Link to="/2">Component2</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/1" element={<Component1 />} />
            <Route path="/2" element={<Component2 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
