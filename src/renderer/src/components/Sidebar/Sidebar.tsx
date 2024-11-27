import classes from './Sidebar.module.scss'
import { NavItem } from './NavItem'
import { IconBinoculars, IconLibrary, IconSettings, IconUser } from '@tabler/icons-react'

export const Sidebar = (): JSX.Element => {
  const items = [
    { icon: IconBinoculars, label: 'Discover', to: '/' },
    { icon: IconLibrary, label: 'Library', to: '/' },
    { icon: IconUser, label: 'Profile', to: '/' },
    { icon: IconSettings, label: 'Settings', to: '/' }
  ]

  return (
    <aside className={classes.sidebar}>
      {items.map((item) => (
        <NavItem key={item.label} data={item} />
      ))}
    </aside>
  )
}
