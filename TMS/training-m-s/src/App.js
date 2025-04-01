import React from 'react';
import LoginForm from './LoginForm';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="header">
          <h1>Personnel and Training Devision</h1>
          <h1>Chief Secretary's Office</h1>
          <h1>Western Province - Sri Lanka</h1>
          <LoginForm /> {/* Moved LoginForm here */}
        </div>
      </div>
    </div>
  );
}

export default App;
