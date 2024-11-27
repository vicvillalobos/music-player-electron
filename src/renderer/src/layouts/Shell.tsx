import { Sidebar } from '@renderer/components/Sidebar/Sidebar'
import classes from './Shell.module.scss'
import { Player } from '@renderer/components/Player/Player'
import { SearchBar } from '@renderer/components/Shell/SearchBar'

export const ShellLayout = ({ children }) => (
  <div className={classes.shell}>
    <header className={classes.titlebar}></header>
    <div className={classes.windowContent}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.mainContent}>
        <SearchBar />
        {children}
      </div>
      <Player />
    </div>
  </div>
)
