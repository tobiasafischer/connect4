import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BoardProvider } from '../components/context'
import { Board, ChoosePlayer, Welcome } from '../components/routes'
import { ROUTES } from './routes'

const AppRoutes: React.FC = () => (
   <Routes>
      <Route path={ROUTES.choosePlayer} element={<ChoosePlayer />} />
      <Route path={ROUTES.board} element={<Board />} />
      <Route path="*" element={<Welcome />} />
   </Routes>
)

export default AppRoutes
