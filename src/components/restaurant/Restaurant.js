import React from 'react';
import './Restaurant.css';
 const Restaurant =()=>(
     <React.Fragment>
         <article className='cafe__card__cont'>
             <section className='backpic'>
                 <div>
                     <div className='cafe__card col-xl-4 col-sm-7 col-xs-12'>
                         <p className='title__card'>Трактир «Пушкин»</p>
                     
                     <div className='flex'><p>₽₽₽ • Европейская</p>
                     <p className='time__card'>40-50 мин</p></div></div>
                 </div>
             </section>
             <nav>
                 <ul>
                     <li>Закуски</li>
                     <li>Салаты</li>
                     <li>Супы</li>
                     <li>Горячие блюда</li>
                     <li>Гарниры</li>
                     <li>Десерты</li>
                 </ul>
             </nav>
             <section className='eat__container'>
                 <p>Закуски</p>
                 <hr></hr>
                 <div className='row pad__cont'>
                     <div className='pad col-md-6 col-sm-12'><div className='eat__card'>
                         <div className='eat__text'>
                             <div><p>Сельдь на боролинском хлебе</p>
                             <p>С яйцом и огурцом</p></div><br></br>
                             <p className='cost'>240 ₽</p>
                         </div>
                         <img alt='' src='./Capture1.png'></img>
                     </div></div>
                     <div className='pad col-md-6 col-sm-12'><div className='eat__card'>
                         <div className='eat__text'>
                             <div><p>Соленья ассорти</p>
                             </div><br></br>
                             <p className='cost'>320 ₽</p>
                         </div>
                         <img alt='' src='./Capture2.png'></img>
                     </div></div>
                     <div className='pad col-md-6 col-sm-12'><div className='eat__card'>
                         <div className='eat__text'>
                             <div>
                                 <p>Грибы маринованные</p>
                             </div><br></br>
                             <p className='cost'>300 ₽</p>
                         </div>
                         <img alt='' src='./Capture3.png'></img>
                     </div></div>
                     <div className='pad col-md-6 col-sm-12'><div className='eat__card'>
                         <div className='eat__text'>
                             <div><p>Сало домашнее с горчицей</p>
                             </div><br></br>
                             <p className='cost'>320 ₽</p>
                         </div>
                         <img alt='' src='./Capture4.png'></img>
                     </div></div>
                     <div className='pad col-md-6 col-sm-12'><div className='eat__card'>
                         <div className='eat__text'>
                             <div><p>Малосольная семга</p>
                             </div><br></br>
                             <p className='cost'>390 ₽</p>
                         </div>
                         <img alt='' src='./Capture5.png'></img>
                     </div></div>
                     <div className='pad col-md-6 col-sm-12'><div className='eat__card'>
                         <div className='eat__text'>
                             <div><p>Язык говяжий с хреном</p>
                             </div><br></br>
                             <p className='cost'>350 ₽</p>
                         </div>
                         <img alt='' src='./Capture6.png'></img>
                     </div></div>
                 </div>
             </section>
         </article>
     </React.Fragment>
 )
 export {Restaurant};