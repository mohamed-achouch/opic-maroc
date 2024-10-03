import React from 'react'
import bannerService from "../assets/services/services.webp"
import HeadingSection from '../components/HeadingSection'
import servicesMenu from '../data/servicesMenu'
import ServiceSection from '../components/ServiceSection'
import OpicBanner from '../components/OpicBanner'
const Services = () => {
  return (
    <div className=''>
        <OpicBanner  image={bannerService} title="Services & Expertise" desc=""/>
        <div>
          <HeadingSection title="Chez Opic, nous travaillons sur l'ensemble du cycle de vie des projets d'ingénierie, d'approvisionnement et de construction (EPC)." content="Grâce à l'expertise de nos plus de 30 000 employés, nous collaborons avec des clients du monde entier pour mener à bien leurs projets en toute sécurité, dans les délais et dans le respect du budget."/>        
          <div>
              {
                 servicesMenu.map((serv, index) => (
                  <ServiceSection key={index} service={serv}/>
                 ))
              }
          </div>
        </div>
    </div>
  )
}

export default Services