import './ArchivementsModal.css'

import { useState } from 'react';

import { Medal, X, Search, UsersRound, ChevronDown } from 'lucide-react';

const ArchivementsModal = ({ isOpen, setIsOpenFalse, data, handleSeeIndividual }) => {

  const [compareOpen, setCompareOpen] = useState(false)

  function handleCompareOpen() {
    if (compareOpen == false) {
      setCompareOpen(true)
    } else {
      setCompareOpen(false)
    }
  }

  return (
    <div className={isOpen ? 'archivements-modal active-modal' : 'archivements-modal'}>
      <div className="archivement-header">
        <div className="inner-header">
          <div className="header-left">
            <Medal />
            <p>Conquistas neste jogo</p>
          </div>
          <div className="header-buttons">
            <div className="game-select">
              <p>Fortnite</p>
              <ChevronDown />
            </div>
            <div className="close-btn" onClick={() => setIsOpenFalse()}>
              <X />
            </div>
          </div>

        </div>

      </div>
      <div className="modal-info-container">
        <div className="modal-archivement-list">
          {data ? data.map((archivement) => {
            return (
              <div className="archivement-modal-border" key={archivement.id + "-modal"}>
                <div className="archivement-badge">
                  <svg className='star-svg' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.2634 0.647447C5.28531 0.603177 5.31916 0.565913 5.36113 0.539859C5.40309 0.513806 5.4515 0.5 5.5009 0.5C5.5503 0.5 5.59871 0.513806 5.64067 0.539859C5.68264 0.565913 5.71649 0.603177 5.7384 0.647447L6.8934 2.98695C6.96949 3.14093 7.08181 3.27415 7.22071 3.37517C7.35962 3.4762 7.52096 3.542 7.6909 3.56695L10.2739 3.94495C10.3228 3.95204 10.3688 3.97268 10.4066 4.00455C10.4445 4.03641 10.4726 4.07822 10.4879 4.12525C10.5032 4.17228 10.505 4.22265 10.4932 4.27066C10.4814 4.31868 10.4563 4.36242 10.4209 4.39695L8.5529 6.21595C8.42971 6.336 8.33754 6.48419 8.28432 6.64776C8.2311 6.81134 8.21843 6.98539 8.2474 7.15495L8.6884 9.72495C8.69704 9.77387 8.69176 9.82423 8.67315 9.87029C8.65454 9.91635 8.62336 9.95625 8.58317 9.98545C8.54298 10.0146 8.49539 10.0319 8.44583 10.0354C8.39628 10.0388 8.34675 10.0283 8.3029 10.0049L5.9939 8.79095C5.84176 8.71106 5.67249 8.66932 5.50065 8.66932C5.32881 8.66932 5.15954 8.71106 5.0074 8.79095L2.6989 10.0049C2.65507 10.0282 2.6056 10.0386 2.55613 10.0351C2.50665 10.0316 2.45916 10.0142 2.41905 9.98506C2.37894 9.95588 2.34782 9.91604 2.32923 9.87006C2.31064 9.82407 2.30533 9.7738 2.3139 9.72495L2.7544 7.15545C2.7835 6.98581 2.77089 6.81165 2.71767 6.64797C2.66445 6.48429 2.5722 6.33602 2.4489 6.21595L0.5809 4.39745C0.545197 4.36296 0.519896 4.31914 0.507881 4.27098C0.495866 4.22282 0.497618 4.17226 0.512939 4.12504C0.52826 4.07783 0.556533 4.03587 0.594538 4.00394C0.632543 3.97201 0.678752 3.9514 0.7279 3.94445L3.3104 3.56695C3.48053 3.5422 3.64209 3.47648 3.78119 3.37544C3.92029 3.27441 4.03275 3.14108 4.1089 2.98695L5.2634 0.647447Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                {archivement.id === "02" ?
                  <div className="medal-modal-box">
                    <Medal className='medal-svg' />
                  </div>
                  :
                  <img src={archivement.src} alt="" />}
              </div>
            )
          })
            : <p>Erro</p>}
        </div>
        <div className="modal-goal-bar">
          <div className="info-goal-bar">
            <div className="left-info">
              <p>50 de 100 alcançadas</p>
            </div>
            <div className="right-info">
              <p>50%</p>
            </div>
          </div>
          <div className="goal-bar">
            <div className="inner-goal-bar fill-50"></div>
          </div>
        </div>
        <div className="social-and-search-container">
          <div className="search-box">
            <Search />
            <input type="text" placeholder='Pesquisar conquista' />
          </div>
          <button className='compare-btn' onClick={() => handleCompareOpen()}>
            <div className="compare-avatar">
              {compareOpen ?
                <div className="compare-avatar-box-img" id='luiza-bg'></div> : <UsersRound />}
            </div>
            <p>{compareOpen ? "Luiza Soares" : 'Comparar com'}</p>
            <ChevronDown className='arrow-btn' />
          </button>
        </div>
        <div className="archivement-list-descriptions">
          {data ? data.map((archivement) => {
            return (
              <div className="descripition-item-container">
                <div className="descripition-item" onClick={() => handleSeeIndividual()} key={archivement.id + "-descripition"}>
                  {archivement.id === "02" ?
                    <div className="medal-modal-box">
                      <Medal className='medal-svg' />
                    </div> :
                    <img src={archivement.src} alt="" />}
                  <div className="text-description-box">
                    <h3>{archivement.id === "02" ? "Título da publicação" : archivement.title}
                      {archivement.id === "01" || archivement.id === '02' ? <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5082 5.49641V8.49641M8.5082 11.4964H8.5157M2.3957 5.96141C2.28623 5.46831 2.30304 4.95554 2.44457 4.47067C2.5861 3.98579 2.84776 3.54449 3.2053 3.1877C3.56284 2.83091 4.00468 2.57017 4.48986 2.42966C4.97503 2.28914 5.48783 2.27341 5.9807 2.38391C6.25198 1.95964 6.6257 1.61048 7.06741 1.36863C7.50913 1.12677 8.00461 1 8.5082 1C9.01179 1 9.50728 1.12677 9.94899 1.36863C10.3907 1.61048 10.7644 1.95964 11.0357 2.38391C11.5293 2.27293 12.043 2.28859 12.5289 2.42945C13.0149 2.5703 13.4573 2.83177 13.8151 3.18953C14.1728 3.54729 14.4343 3.98972 14.5752 4.47566C14.716 4.96161 14.7317 5.47528 14.6207 5.96891C15.045 6.24019 15.3941 6.61391 15.636 7.05562C15.8778 7.49733 16.0046 7.99282 16.0046 8.49641C16.0046 9 15.8778 9.49549 15.636 9.9372C15.3941 10.3789 15.045 10.7526 14.6207 11.0239C14.7312 11.5168 14.7155 12.0296 14.575 12.5148C14.4344 12.9999 14.1737 13.4418 13.8169 13.7993C13.4601 14.1569 13.0188 14.4185 12.5339 14.56C12.0491 14.7016 11.5363 14.7184 11.0432 14.6089C10.7723 15.0348 10.3983 15.3855 9.9558 15.6284C9.51333 15.8713 9.01672 15.9987 8.51195 15.9987C8.00718 15.9987 7.51057 15.8713 7.06811 15.6284C6.62564 15.3855 6.25163 15.0348 5.9807 14.6089C5.48783 14.7194 4.97503 14.7037 4.48986 14.5632C4.00468 14.4227 3.56284 14.1619 3.2053 13.8051C2.84776 13.4483 2.5861 13.007 2.44457 12.5222C2.30304 12.0373 2.28623 11.5245 2.3957 11.0314C1.96817 10.7608 1.61601 10.3865 1.37199 9.94332C1.12796 9.5001 1 9.00237 1 8.49641C1 7.99046 1.12796 7.49272 1.37199 7.0495C1.61601 6.60628 1.96817 6.23198 2.3957 5.96141Z" stroke="#E9D944" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                        : <></>}
                    </h3>
                    <p>Descrição até 20 caracteres...</p>
                    <span>Alcançado por 20% dos jogadores</span>
                  </div>

                </div>
                {compareOpen ? <div className='compare-container'>
                  {archivement.archived === "luiza" ? <>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='luiza-bg'></div>
                    </div>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img grayscale" id='user-bg'></div>
                    </div></> : <>
                  </>}

                  {archivement.archived === "user" ? <>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img grayscale" id='luiza-bg'></div>
                    </div>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='user-bg'></div>
                    </div></> : <>
                  </>}

                  {archivement.archived === "bouth" ? <>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='luiza-bg'></div>
                    </div>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='user-bg'></div>
                    </div></> : <>
                  </>}

                </div> : <></>}
              </div>


            )
          }) : <>Erro</>}
          <div className="not-archived">
            <p>Não alcançadas</p>
            {data ? data.map((archivement) => {
              return (<div className='descripition-item-container'>
                <div className="descripition-item" onClick={() => handleSeeIndividual()} key={archivement.id + "-descripition"}>
                  {archivement.id === "02" ?
                    <div className="medal-modal-box">
                      <Medal className='medal-svg' />
                    </div> :
                    <img src={archivement.src} alt="" />}
                  <div className="text-description-box">
                    <h3>{archivement.id === "02" ? "Título da publicação" : archivement.title}</h3>
                    <p>Descrição até 20 caracteres...</p>
                    <span>Alcançado por 20% dos jogadores</span>
                  </div>
                </div>
                {compareOpen ? <div className='compare-container'>
                  {archivement.nonArchived === "luiza" ? <>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='luiza-bg'></div>
                    </div>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img grayscale" id='user-bg'></div>
                    </div></> : <>
                  </>}

                  {archivement.nonArchived === "user" ? <>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img grayscale" id='luiza-bg'></div>
                    </div>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='user-bg'></div>
                    </div></> : <>
                  </>}

                  {archivement.nonArchived === "bouth" ? <>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='luiza-bg'></div>
                    </div>
                    <div className="compare-avatar-box">
                      <div className="compare-avatar-box-img" id='user-bg'></div>
                    </div></> : <>
                  </>}

                </div> : <></>}
              </div>
              )
            }) : <>Erro</>}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ArchivementsModal