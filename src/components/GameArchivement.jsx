import { useState } from 'react';
import ArchivementCard from './ArchivementCard';
import './GameArchivement.css'

import { Medal, Pencil, ArrowRight } from 'lucide-react';

const GameArchivement = ({handleSeeAll, data, handleSeeIndividual}) => {

  return (
    <div className='archivement-container'>
      <div className="archivement-header">
        <div className="inner-header">
          <Medal />
          <p>Conquistas neste jogo</p>
          <button onClick={() => handleSeeAll()}>ver tudo</button>
        </div>
        <div className="edit-btn">
          <Pencil />
        </div>
      </div>
      <div className="archivement-box">
        <div className="inner-box">
          {data ? data.map((archivement) => {
            return (<div key={archivement.id} onClick={() => handleSeeIndividual()}><ArchivementCard  archivement={archivement} /></div>)
          })
          : <p>Erro</p>}
        </div>
        <button className='scroll-right'><ArrowRight /></button>
      </div>
    </div>
  )
}

export default GameArchivement