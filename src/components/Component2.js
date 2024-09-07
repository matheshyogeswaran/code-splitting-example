import React from 'react';

export default function Component2() {
  
  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <div>
      <h1>Component2</h1>
      <h1>Numbers from 1 to 1000</h1>
      <ul>
        {numbers.map(number => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
