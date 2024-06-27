import React from 'react'
import TopBar from '../components/TopBar'
import ItemDisplay from '../components/ItemDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import ProductMenu from '../components/ProductMenu'

const LandingPage = () => {
  return (
    <div>
        <TopBar/>
        {/* <div className="landingsection"> */}
        <ItemDisplay/>
        <Chains/>
        <FirmCollections/>
       
        {/* </div> */}
    </div>
  )
}

export default LandingPage