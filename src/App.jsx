import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'

function App() {

  return (
    <>
    <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App
