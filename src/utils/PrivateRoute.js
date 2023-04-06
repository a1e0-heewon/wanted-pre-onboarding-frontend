import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
    const isAuthenticated = localStorage.getItem('accesstoken');

    return isAuthenticated === null || isAuthenticated === 'false' ? (
        <Navigate to="/login" />
    ) : (
        <Outlet />
    );
}
