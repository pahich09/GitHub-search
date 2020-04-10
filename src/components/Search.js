import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

const Search = () => {
  const {show} = useContext(AlertContext)
  const onSubmit = e => {
    if(e.key === 'Enter'){
      show('my alert')
    }
  }
  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className='form-control'
        placeholder='Введите имя пользователя'
       onKeyPress={onSubmit}
      />
    </div>
  )
}
export default Search
