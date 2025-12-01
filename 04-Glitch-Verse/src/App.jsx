import React from 'react'
import { TiendaCard } from './components/TiendaCard'
import { Navbar } from './components/Navbar'
import { FooterCard } from './components/FooterCard'

export const App = () => {
  return (
    <>
    <Navbar/>
      <TiendaCard/>
      <FooterCard/>
    </>
  )
}

