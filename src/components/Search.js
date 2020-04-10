import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

const Search = () => {
  const {show} = useContext(AlertContext)
  const [value, setValue] = useState('')
  const onSubmit = e => {
    if (e.key !== 'Enter') {
    return
    }
      if (value.trim()) {
        console.log('ok')
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
