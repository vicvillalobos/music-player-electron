import { Sidebar } from '@renderer/components/Sidebar/Sidebar'
import classes from './Shell.module.scss'
import { Player } from '@renderer/components/Player/Player'

export const ShellLayout = ({ children }) => (
  <div className={classes.shell}>
    <header className={classes.titlebar}></header>
    <div className={classes.windowContent}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.mainContent}>{children}</div>
      <Player />
    </div>
  </div>
)
