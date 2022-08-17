import React from 'react';
import Main from '../src/SignIn screen/Main';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Library from './Pages/Library';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="dashboard" element={<Dashboard/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="library" element={<Library/>}/>
    </Route>
    </Routes>
    </BrowserRouter> 
      </header>
    </div>
  );
}

export default App;
