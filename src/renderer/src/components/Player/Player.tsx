import {
  IconPlayCard,
  IconPlayerPlay,
  IconPlayerPlayFilled,
  IconPlayerSkipBack,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled
} from '@tabler/icons-react'
import classes from './Player.module.scss'

export const Player = (): JSX.Element => (
  <div className={classes.player}>
    <div className={classes.controls}>
      <div className={classes.playerControl}>
        <IconPlayerSkipBackFilled />
      </div>
      <div className={classes.playControl}>
        <IconPlayerPlayFilled />
      </div>

      <div className={classes.playerControl}>
        <IconPlayerSkipForwardFilled />
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
)
