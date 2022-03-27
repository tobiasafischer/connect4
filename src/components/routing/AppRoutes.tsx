import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../routes'
import RouterLayout from './RouterLayout'

const AppRoutes: React.FC = () => (
   <Routes>
      <Route element={<RouterLayout />}>
         <Route path="*" element={<Home />} />
      </Route>
   </Routes>
)

export default AppRoutes
