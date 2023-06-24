// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { PostConsole } from "./pages/PostConsole";
import { CommentConsole } from "./pages/CommentConsole";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/postConsole" element={<PostConsole />} />
        <Route path="/commentConsole" element={<CommentConsole />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App
