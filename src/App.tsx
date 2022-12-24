import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import Jogos from './paginas/Jogos';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Jogos />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
