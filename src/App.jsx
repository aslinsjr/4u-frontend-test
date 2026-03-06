import { useState } from 'react';
import './App.css'

import GameArchivement from './components/GameArchivement'
import ArchivementModal from './components/ArchivementsModal'
import IndividualModal from './components/IndividualModal'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [isIndividualOpen, setIsIndividualOpen] = useState(false)

  const data = [
    {
      id: "01",
      src: "./hero-of-the-storm.png",
      title: "Hero of the Storm",
      archived: 'bouth',
      nonArchived: "bouth"
    },
    {
      id: "02",
      src: "./hero-of-the-storm.png",
      title: "Gunsmith",
      archived: 'user',
      nonArchived: "user"
    },
    {
      id: "03",
      src: "./take-out-those-husks.png",
      title: "Take Out Those Husks",
      archived: 'luiza',
      nonArchived: "user"
    }
  ]

  function handleSeeAll() {
    setIsIndividualOpen(false)
    setIsOpen(true)
  }

  function handleSeeIndividual() {
    setIsIndividualOpen(true)
  }

  function setIsOpenFalse() {
    setIsIndividualOpen(false)
    setIsOpen(false)
  }

  return (
    <div className='app'>
      <GameArchivement handleSeeAll={handleSeeAll} data={data} handleSeeIndividual={handleSeeIndividual} />
      <ArchivementModal isOpen={isOpen} setIsOpenFalse={setIsOpenFalse} data={data} handleSeeIndividual={handleSeeIndividual} />
      <IndividualModal handleSeeAll={handleSeeAll} isIndividualOpen={isIndividualOpen} setIsOpenFalse={setIsOpenFalse} handleSeeIndividual={handleSeeIndividual} />
    </div>
  )
}

export default App
