import { Icon } from '@tabler/icons-react'
import classes from './NavItem.module.scss'

export interface NavItemProps {
  icon: Icon
  label: string
  to: string
}

export const NavItem = ({ data }: { data: NavItemProps }) => (
  <div className={classes.navItem}>
    <data.icon className={classes.icon} size="1rem" />
    <span>{data.label}</span>
  </div>
)
