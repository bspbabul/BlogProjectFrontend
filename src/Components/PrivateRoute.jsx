import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

import { isLoggedin } from '../auth'

const PrivateRoute=()=>{
    return isLoggedin() ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
