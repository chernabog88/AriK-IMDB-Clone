/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import React from 'react';
import './App.css'
import { Menu } from './components/Menu/';
import { Routes } from './constants/Routes';

function App() {


  return (
    <>
      <Menu />
      <Routes />
    </>
  )
}

export default App
