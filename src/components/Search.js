import React, {useContext, useState} from "react"
import {AlertContext} from "../context/alert/alertContext"
import {GitHubContext} from "../context/gitHub/gitHubContext"

const Search = () => {
  const {show, hide} = useContext(AlertContext)
  const gitHub = useContext(GitHubContext)
  const [value, setValue] = useState('')
  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return
    }
    gitHub.clearUsers()
    if (value.trim()) {
      gitHub.search(value.trim())
      hide()
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
