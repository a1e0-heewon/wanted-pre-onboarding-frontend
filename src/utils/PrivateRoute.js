import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute(authentication) {
    const isAuthenticated = localStorage.getItem('accesstoken');

    if (authentication) {
        return isAuthenticated === null || isAuthenticated === 'false' ? (
            <Navigate to="/login" />
        ) : (
            <Outlet />
        );
    }
    return isAuthenticated === null || isAuthenticated === 'false' ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
}
