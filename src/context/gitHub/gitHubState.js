import React, {useReducer} from "react"
import {GitHubContext} from "./gitHubContext"
import {GitHubReducer} from "./gitHubReducer"
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING
} from "../types"
import Axios from "axios"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SEC = process.env.REACT_APP_CLIENT_SECRET
const withCred = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SEC}`
}

export const GitHubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GitHubReducer, initialState)

  const {user, users, repos, loading} = state

  const search = async value => {
    setLoading()
    const {data} = await Axios
      .get(withCred(`https:api.github.com/search/users?q=${value}&`))
    dispatch({
      type: SEARCH_USERS,
      payload: data.items
    })
  }
  const getUser = async name => {
    setLoading()
    const {data} = await Axios
      .get(withCred(`https:api.github.com/users/${name}?`))
    dispatch({
      type: GET_USER,
      payload: data
    })
  }

  const getRepos = async name => {
    setLoading()
    const {data} = await Axios
      .get(withCred(`https:api.github.com/users/${name}/repos?per_page=5&`))
    dispatch({
      type: GET_REPOS,
      payload: data
    })
  }
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    })
  }
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }
  return (
    <GitHubContext.Provider value={{
      user, users, repos, loading,
      search, getUser, getRepos, clearUsers, setLoading
    }}>
      {children}
    </GitHubContext.Provider>
  )
}
