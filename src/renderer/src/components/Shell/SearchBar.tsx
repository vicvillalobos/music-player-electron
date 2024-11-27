import { useState } from 'react'
import classes from './SearchBar.module.scss'
import { IconSearch } from '@tabler/icons-react'

export const SearchBar = () => {
  const [search, setSearch] = useState('')

  return (
    <div className={classes.searchbar}>
      <IconSearch />
      <input
        type="text"
        value={search}
        placeholder="Search by artist, album or song"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
