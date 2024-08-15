import './App.css';
import React from "react";
import { HashRouter as Router, Routes,Route } from 'react-router-dom';
import Pengumuman from './pages/pengumuman';
import Peserta from './pages/peserta';
import { Layout } from './layout';
import Formpage from './pages/fomrpage';
import Login from './pages/loginpage';
import { RequireAuth } from 'react-auth-kit';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<RequireAuth loginPath='/login'>
             <Pengumuman/>
           </RequireAuth>}></Route>
          <Route path="/peserta" element={<RequireAuth loginPath='/login'>
            <Peserta/>
          </RequireAuth>}/>
          <Route path="/formpage" element={<RequireAuth loginPath='/login'>
          <Formpage/>
          </RequireAuth>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
