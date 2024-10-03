import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from "../pages/About"
import NotFound from '../pages/NotFound'
import Projects from '../pages/Projects'
import PurposeAndValues from '../pages/PurposeAndValues'
import Location from '../pages/Location'
import ConseilAdministration from '../pages/ConseilAdministration'
import ManagementTeam from '../pages/ManagementTeam'
import Approche from '../pages/Approche'
import Services from '../pages/Services'
import ContacterNous from '../pages/ContacterNous'
import DemandeCommerciale from '../pages/DemandeCommerciale'
import { DemandesGénérales } from '../pages/DemandesGénérales'
import ManagerGeneral from '../pages/ManagerGeneral'
import Decoration from '../pages/Decoration'
import Structure from '../pages/Structure'
import Architectural from '../pages/Architectural'
import Technique from '../data/Technique'
import PatrimoineProjects from '../pages/PatrimoineProjects'
import EngagementSocial from '../pages/EngagementSocial'

const Routers = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='location' element={<Location/>}/>
          <Route path='/proposeAndeValue' element={<PurposeAndValues/>}/>
          <Route path='/administration' element={<ConseilAdministration/>}/>
          <Route path='/team-management' element={<ManagementTeam/>}/>
          <Route path='/approche' element={<Approche/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contacter-nous' element={<ContacterNous/>}/>
          <Route path='/demandes-commerciales' element={<DemandeCommerciale/>}/>
          <Route path='/demandes-generales' element={<DemandesGénérales/>}/>
          <Route path='/general-manager' element={<ManagerGeneral/>}/>
          <Route path='/decoration-service' element={<Decoration/>}/>
          <Route path='/structure-service' element={<Structure/>}/>
          <Route path='/architectural-service' element={<Architectural/>}/>
          <Route path='/technique-service' element={<Technique/>}/>
          <Route path='/patrimoine-projets' element={<PatrimoineProjects/>}/>
          <Route path='/engagement-social' element={<EngagementSocial/>}/>
       </Routes>
    </div>
  )
}

export default Routers