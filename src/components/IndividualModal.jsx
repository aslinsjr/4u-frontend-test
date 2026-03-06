import './IndividualModal.css'

import { X, Medal, ArrowLeft, DollarSign } from 'lucide-react';

const IndividualModal = ({ isIndividualOpen, setIsOpenFalse, handleSeeAll }) => {
    return (
        <div className={isIndividualOpen ? 'individual-modal active-modal' : 'individual-modal'}>
            <div className="archivement-header">
                <div className="inner-header">
                    <div className="header-left">
                        <Medal />
                        <p>Conquistas neste jogo</p>
                    </div>
                    <div className="header-buttons">
                        <div className="close-btn" onClick={() => setIsOpenFalse()}>
                            <X />
                        </div>
                    </div>
                </div>
            </div>
            <div className="individual-detail">
                <div className="detail-header">
                    <div className="archivement-img">
                        <img src="./take-out-those-husks.png" alt="" />
                    </div>
                    <h2>Take Out Those Husks</h2>
                </div>
                <div className="detail-grid">
                    <div className="detail-grid-card">
                        <div className="detail-label">plataforma:</div>
                        <div className="detail-info"><img src="./epic-logo.png" alt="" />Epic Games</div>
                    </div>
                    <div className="detail-grid-card">
                        <div className="detail-label">nickname:</div>
                        <div className="detail-info">jolivit</div>
                    </div>
                    <div className="detail-grid-card large">
                        <div className="detail-label">evento</div>
                        <div className="detail-info">--</div>
                    </div>
                    <div className="detail-grid-card">
                        <div className="detail-label">data da conquista:</div>
                        <div className="detail-info">01/01/2024 • 16h30</div>
                    </div>
                    <div className="detail-grid-card">
                        <div className="detail-label">data de validade:</div>
                        <div className="detail-info">--</div>
                    </div>
                    <div className="detail-grid-card">
                        <div className="detail-label">tipo de conquista:</div>
                        <div className="detail-info"><div className="rare-badge">Raro</div></div>
                    </div>
                    <div className="detail-grid-card">
                        <div className="detail-label">% de players:</div>
                        <div className="detail-info">19%</div>
                    </div>
                    <div className="detail-grid-card large">
                        <div className="detail-label">descrição:</div>
                        <div className="detail-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    </div>
                </div>
            </div>
            <div className="archivement-footer">
                <button id='arrow-btn' onClick={() => handleSeeAll()}><ArrowLeft /></button>
                <button><DollarSign /> marcar como venda</button>
                <button><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.45425 0.684309C6.48164 0.628972 6.52395 0.582391 6.57641 0.549824C6.62886 0.517257 6.68938 0.5 6.75112 0.5C6.81287 0.5 6.87338 0.517257 6.92584 0.549824C6.9783 0.582391 7.02061 0.628972 7.048 0.684309L8.49175 3.60868C8.58686 3.80116 8.72726 3.96769 8.90089 4.09397C9.07452 4.22025 9.2762 4.3025 9.48862 4.33368L12.7174 4.80618C12.7786 4.81505 12.836 4.84085 12.8833 4.88068C12.9306 4.92051 12.9658 4.97278 12.9849 5.03156C13.004 5.09035 13.0063 5.15331 12.9915 5.21333C12.9767 5.27335 12.9454 5.32803 12.9011 5.37118L10.5661 7.64493C10.4121 7.795 10.2969 7.98023 10.2304 8.1847C10.1639 8.38917 10.148 8.60674 10.1842 8.81868L10.7355 12.0312C10.7463 12.0923 10.7397 12.1553 10.7164 12.2129C10.6932 12.2704 10.6542 12.3203 10.604 12.3568C10.5537 12.3933 10.4942 12.4149 10.4323 12.4192C10.3703 12.4236 10.3084 12.4104 10.2536 12.3812L7.36737 10.8637C7.1772 10.7638 6.96561 10.7117 6.75081 10.7117C6.53601 10.7117 6.32443 10.7638 6.13425 10.8637L3.24862 12.3812C3.19383 12.4102 3.132 12.4232 3.07016 12.4188C3.00832 12.4144 2.94895 12.3928 2.89881 12.3563C2.84867 12.3199 2.80977 12.2701 2.78653 12.2126C2.7633 12.1551 2.75666 12.0922 2.76737 12.0312L3.318 8.81931C3.35437 8.60727 3.33861 8.38956 3.27209 8.18496C3.20556 7.98037 3.09026 7.79503 2.93612 7.64493L0.601125 5.37181C0.556496 5.3287 0.524871 5.27393 0.509851 5.21373C0.494832 5.15353 0.497023 5.09032 0.516174 5.0313C0.535325 4.97229 0.570667 4.91983 0.618173 4.87992C0.665679 4.84001 0.723439 4.81425 0.784875 4.80556L4.013 4.33368C4.22566 4.30275 4.42762 4.22059 4.60149 4.0943C4.77536 3.96801 4.91594 3.80135 5.01112 3.60868L6.45425 0.684309Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    fixar
                </button>
                <button id='double-arrow'>
                    <div className="inner-arrow-btn">
                        <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.30573H22" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M13.9844 0.707092L21.3599 8.08266" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M13.9844 15.9051L21.3599 8.52954" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M7.0293 0.707092L14.4049 8.08266" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M7.0293 15.9049L14.4049 8.52936" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                        </svg>
                        <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.30573H22" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M13.9844 0.707092L21.3599 8.08266" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M13.9844 15.9051L21.3599 8.52954" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M7.0293 0.707092L14.4049 8.08266" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M7.0293 15.9049L14.4049 8.52936" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default IndividualModal