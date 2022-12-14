import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, children }) {
	return Object.keys(user).length === 0 ? <Navigate to="/Intro" /> : children;
}

export default ProtectedRoute;
