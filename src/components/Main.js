import React from 'react';
import './Main.css';
import {food} from '../App'
import { Link } from 'react-router-dom';
class Main extends React.Component{
 
    render(){
        const template = food.map(
            function(item, index){
                return (
                    <div key ={index} className='cafe col-xl-4 col-xs-12 col-sm-6'>
                        <Link to='/Restaurant'>
                    <img alt='' src={item.img}></img>
                        <p>{item.title}</p>
                        <p>{item.text}</p>
                        <p>{item.time}</p></Link>
                    </div>
                )
            }
        )
        console.log(template)



        return(
    <main>
        <article className='main__container'>
            <section>
                <div className='little__title'>Поиск по ресторанам и кухням</div>
            </section>
            <section>
                <p>Рестораны в Москве</p>
                <div className='col-xl-12 cafe__container'>{template}</div>
                
            </section>
        </article>
    </main>
            )
    }}
export {Main};