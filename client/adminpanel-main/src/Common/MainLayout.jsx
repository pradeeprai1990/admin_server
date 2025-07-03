import React from 'react'
import Dashboard from '../Pages/Dashboard'
import { Outlet } from 'react-router'
import Home from '../Pages/Home'

export default function MainLayout() {
    return (
        <div>
            <Home />
            <Outlet />
        </div>
    )
}
