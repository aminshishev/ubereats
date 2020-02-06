import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer =()=>{
    return (
        <footer>
            <section>
            <Link to='/'><p className='logo'>UBER<span>EATS</span></p></Link>
            </section>
            <section className='row'>
                <div>
                    <div className='language row'>
                        <div className='row lang'>
                            <img alt='' src='./Shape.svg' className='glob'></img>
                            <p>Русский</p>
                        </div>
                        <img alt='' src='./Shape1.svg'></img>
                    </div>
                    <p className='uber'><span>#</span>UberEats</p>
                    <div className='social'>
                        <img alt='' src='./fcb.svg'></img>
                        <img alt='' src='./twit.svg'></img>
                        <img alt='' src='./inst.svg'></img>
                    </div>
                </div>
                <div>
                    <p className='marg'>Об UberEats</p>
                    <p className='marg'>Станьте партнером по доставке</p>
                    <p className='marg'>Станьте парнером-рестораном</p>
                </div>
                <div>
                    <p className='marg'>Все города</p>
                    <p className='marg'>Цены</p>
                    <p className='marg'>Помощь</p>
                    <p className='marg'>FAQs</p>
                </div>
            </section>
            <section>
                <div className='download'>
                    <img alt='' src='./apple.png'></img>
                    <img alt='' src='./google.svg'></img>
                </div>
            </section>
            <section>
                <p>© 2017 Uber Technologies Inc.</p>
                <p>Обработка персональных данных</p>
                <p>Пользовательское соглашение</p>
            </section>
        </footer>
    )
}
export {Footer};