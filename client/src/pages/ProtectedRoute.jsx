import React from 'react'
import {Navigate} from 'react-router-dom'

function ProtectedRoute({user, children}) {
    return !user ? <Navigate to='/login' /> : children
}

export default ProtectedRoute