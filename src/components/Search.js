import React, {useContext, useState} from "react"
import {AlertContext} from "../context/alert/alertContext"
import {GitHubContext} from "../context/gitHub/gitHubContext"

const Search = () => {
  const {show} = useContext(AlertContext)
  const gitHub = useContext(GitHubContext)
  const [value, setValue] = useState('')
  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return
    }
    if (value.trim()) {
      gitHub.search(value.trim())
      // gitHub.getRepos(value.trim())
      // gitHub.getUser(value.trim())
    } else {
      show('Введите данные пользователя')
    }
  }

  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className='form-control'
        placeholder='Введите имя пользователя'
        onKeyPress={onSubmit}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}
export default Search
