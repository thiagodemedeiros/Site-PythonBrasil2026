import Home from './pages/home/Home'
import Faq from './pages/faq/Faq'
import './App.css'
import Carregamento from './components/Carregamento'
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import Layout from './Layout'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (<>
    {loading && <Carregamento />}

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="perguntas_frequentes" element={<Faq/>} />
      </Route>
    </Routes>
  </>)
}

export default App