import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import MostrarForm from './assets/componentes.jsx'

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <MostrarForm titulo="Inscripcion" inputText1="Nombre" inputText2="Apellido" inputText3="Descripción" submit="enviar datos"/>
    </>
  )
}

export default App
