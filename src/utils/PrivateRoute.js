import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ authentication }) {
    const isAuthenticated = localStorage.getItem('accesstoken');

    if (authentication) {
        return isAuthenticated === null || isAuthenticated === 'false' ? (
            <Navigate to="/signin" />
        ) : (
            <Outlet />
        );
    }
    return isAuthenticated === null || isAuthenticated === 'false' ? (
        <Outlet />
    ) : (
        <Navigate to="/todo" />
    );
}
