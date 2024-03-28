import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup/signup'
import Login from './Components/Login/Login'
import Otp from './Components/Otp/Otp'
import Create from './Components/Create/Create'
import Dashboard from './Components/Dashboard/Dashboard'
import User from './Components/User/User'
import { Profile } from './Components/Profile/Profile'
import More from './Components/More/More'
import { Wallett } from './Components/Wallett/Wallett'
import Summary from './Components/Summary/Summary'
import { Schedule } from './Components/Schedule/Schedule'
import FAQ from './Components/FAQ/FAQ'
import AboutCompany from './Components/AboutCompany/AboutCompany'
import SchePickup from './Components/SchePickup/SchePickup'
import Rewards from './Components/Rewards/Rewards'
import Free from './Components/Free/Free'
import Products from './Components/Products/Products'
import Giveaway from './Components/Giveaway/Giveaway'
import Hooray from './Components/Hooray/Hooray'
import Termsconditions from './Components/Termsconditions/Termsconditions'

export default function Routers() {
    return (
        <>
            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/otp' element={<Otp />} />
                <Route path='/create' element={<Create />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/user' element={<User />}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/Wallett' element={<Wallett/>}/>
                <Route path='/summary' element={<Summary/>}/>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/more'element={<More/>}/>
                <Route path='/FAQ' element={<FAQ/>}/>
                <Route path='/aboutcompany'element={<AboutCompany/>}/>
                <Route path='/schepickup' element={<SchePickup/>}/>
                <Route path='/rewards'element={<Rewards/>}/>
                <Route path='/free'element={<Free/>}/>
                <Route path='/products'element={<Products/>}/>
                <Route path='/giveaway'element={<Giveaway/>}/>
                <Route path='/hooray'element={<Hooray/>}/>
                <Route path='/termsconditions'element={<Termsconditions/>}/>
            </Routes>

        </>
    )
}
