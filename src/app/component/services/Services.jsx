import React from 'react'

import Chooseleft from '../../assets/servicesleft.png'


import { useServiceContext } from '../../context/ServicesContext'
import CardSwiper from '../cardSlider/CardSwiper'
import Commen from '../commen/Commen'
const Services = () => {
  const {serviceData} = useServiceContext()
  const className = "about-chose"
  const htmlTag = <p> This results in clear project responsibility and minimal coordination of tasks for Comply Core clients throughout project execution. </p>;
  const dataAbout = {
    "title":"Comply Core Service Portfolio",
    "description":` Comply Core offers its clients comprehensive engineering and consulting services. Comply Core competently manages all engineering works and specialist disciplines required for a project.  ` 
  } 
  return (
    <>
    <div className="home-page">
        <section className="home Login-home">
        <div className="container">
          <div className="home-block">
           
          </div>
         
        </div>
        </section>
        <section className='Login-section'> 
          <div className="title">
              <h1>Services</h1>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="featuresblock">
            
            <Commen dataAbout={dataAbout} Chooseleft={Chooseleft}  className={className} htmlTag= {htmlTag}/>
             
            </div>
          </div>
        </section>
        <section className="features features2">
          <div className="container">
            <div className="featuresblock">
              <ul className='feaure-card-ul'>
              {serviceData.map((curElem)=>{
                return <CardSwiper key={curElem.id} curElem={curElem}/>
              })}
              </ul>
{/*            
            <ul className="feaure-card-ul">
              {serviceData.map((curElem)=>{
                 const {id, title , image, description} = curElem;
               return(
                <li className="feature-card-li" key={id} >
                <div className="feature-card">
                  <div className="card-imgs">
                    <img src={image} alt="" />
                  </div>
                  <div className="f-card-body">
                    <h3>{title}</h3>
                    <p>
                   {description}
                    </p>
                  </div>
                </div>
              </li>
               )
               
              })}
              
              </ul>  */}
            </div>
          </div>
        </section>
   
    </div>
        
    </>
  )
}

export default Services