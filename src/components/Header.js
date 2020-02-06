import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header=()=>{
    return (
        <header className='row'>
           <div className='header__container col-lg-12'><Link to='/'><p className='logo'>UBER<span>EATS</span></p></Link>
            <div className='right__container'><div className='button__container'><button>Войти</button></div>
            <img alt='' src={require('./basket.svg')}></img></div>
            </div>
        </header>
    )
}
export {Header};