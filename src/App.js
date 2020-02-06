import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Content} from './components/Content';
import {Footer} from './components/Footer';
const food =[
  {img: './one.png',
  title: 'Макдоналдс — Газетный',
  text: '₽₽ • Бургеры',
  time: '25 - 35 Min'},
  {img: './two.png',
  title: 'DimSum & Co - ЦДМ',
  text: '₽ • Японская • Китайская • Азиатская',
  time: '40 - 50 Min'},
  {img: './three.png',
  title: 'ДвижОК - Манежная',
  text: '₽ • Американская • Европейская',
  time: '35 - 45 Min'},
  {img: './four.png',
  title: 'НЯ - NHA',
  text: '₽₽ • Вьетнамская',
  time: '30 - 40 Min'},
  {img: './five.png',
  title: 'Точка Дзы - Цветной',
  text: '₽₽ • Вьетнамская',
  time: '40 - 50 Min'},
  {img: './six.png',
  title: 'Cinnabon',
  text: '₽ • Выпечка • Десерты • Капкейки',
  time: '25 - 35 Min'},
  {img: './seven.png',
  title: 'PIZZELOVE',
  text: '₽₽ • Пицца',
  time: '15 - 25 Min'},
  {img: './eight.png',
  title: 'Zю кафе - Тверская',
  text: '₽₽ • Японская',
  time: '25 - 35 Min'},
  {img: './nine.png',
  title: 'Bar BQ Cafe - Манежная',
  text: '₽₽₽ • Европейская',
  time: '30 - 40 Min'}


]

function App() {
  return <React.Fragment>
    <Header />
    <Content />
    <Footer />
  </React.Fragment>
  
}

export default App;
export {food};
