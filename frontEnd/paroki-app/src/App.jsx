import './App.css';
import React, {useEffect} from "react";
import { HashRouter as Router, Routes,Route } from 'react-router-dom';
import Pengumuman from './pages/pengumuman';
import Peserta from './pages/peserta';
import Profile from './pages/profile';
import { Layout } from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Pengumuman/>}/>
          <Route path="/peserta" element={<Peserta/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
