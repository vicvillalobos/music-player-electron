import { Route, Routes } from 'react-router'
import { ShellLayout } from './layouts/Shell'
import { HomePage } from './pages/Home'

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route Component={ShellLayout}>
      <Route path="/" element={<HomePage />} />
    </Route>
  </Routes>
)
