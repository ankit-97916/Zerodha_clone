import React from 'react'
import WatchList from './WatchList'
import Summary from './Summary'
import {Routes, Route} from 'react-router-dom'
import Orders from './Orders'
import Holding from './Holding'
import Positions from './Positions'
import Funds from './Funds'
import {GeneralContextProvider} from "./GeneralContext";
import Apps2 from './Apps2'


const Dasboard = () => {
  return (
    <div className='dashboard-container'>
      <GeneralContextProvider>
      <WatchList/>
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary/>}/>
            <Route exact path="/orders" element={<Orders/>}/>
            <Route exact path="/holdings" element={<Holding/>}/>
            <Route exact path="/positions" element={<Positions/>}/>
            <Route exact path="/funds" element={<Funds/>}/>
            <Route exact path="/apps" element={<Apps2/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Dasboard