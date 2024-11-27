import { Route, Routes } from 'react-router'
import { ShellLayout } from './layouts/Shell'
import { HomePage } from './pages/Home'
import { LibraryPage } from './pages/Library'

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route Component={ShellLayout}>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
    </Route>
  </Routes>
)
