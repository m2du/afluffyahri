import React from 'react';
import Aaravos from './images/aaravos.png';
import AcademyAhri from './images/academy_ahri.png';
import FortniteHeroes from './images/fortnite_heroes.png';
import Hsenna4 from './images/hsenna4.png';
import Kage2 from './images/kage2.png';
import KyraToto from './images/kyra_toto.png';
import KyraSword from './images/kyra_with_sword.png';
import Kyra from './images/kyra.png';
import LightAhri from './images/light_ahri.png';
import Pokemaster from './images/pokemaster.png';
import Versa from './images/versa_skin.png';
import './portfolio.css';

export default (props) => {
    return (
        <div className='portfolio page body-font'>
            <header className='page-header title-font'>Portfolio</header>
            <div className='portfolio-content'>
                <img className='portfolio-item' src={LightAhri} alt='' />
                <img className='portfolio-item' src={Aaravos} alt='' />
                <img className='portfolio-item' src={AcademyAhri} alt='' />
                <img className='portfolio-item' src={FortniteHeroes} alt='' />
                <img className='portfolio-item' src={KyraToto} alt='' />
                <img className='portfolio-item' src={KyraSword} alt='' />
                <img className='portfolio-item' src={Kyra} alt='' />
                <img className='portfolio-item' src={Pokemaster} alt='' />
                <img className='portfolio-item' src={Versa} alt='' />
                <img className='portfolio-item' src={Kage2} alt='' />
                <img className='portfolio-item' src={Hsenna4} alt='' />
            </div>
        </div>
    )
}